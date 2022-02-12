(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [81],
  {
    40990: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return ce;
          },
        });
      var l = a(34699),
        i = a(85893),
        n = a(67294),
        t = a(53522),
        c = a(98687),
        r = a(56880),
        d = a(99307),
        h = a(94831),
        o = a(87226),
        x = a(29009),
        m = a(46888),
        j = a(3023),
        u = a(75358),
        f = a(14195),
        p = a(76830),
        g = a(86108),
        N = a(45108),
        b = a(82931),
        v = a(46208),
        w = a(43815),
        y = a(60602),
        F = a(56941),
        Z = a(91121),
        k = a(75351),
        A = a(10267),
        S = a(97975),
        z = a(6023),
        E = a.n(z),
        K = a(87519),
        R = a.n(K),
        _ = a(78029),
        C = a.n(_),
        L = a(53490),
        D = a.n(L),
        M = a(68620),
        I = a.n(M),
        O = a(8603),
        T = a.n(O),
        W = a(29543),
        J = a.n(W),
        $ = a(88699),
        P = a.n($),
        V = a(6130),
        B = a.n(V),
        G = [
          { day: "01", growth: 44, traffic: 1440 },
          { day: "02", growth: 22, traffic: 3320 },
          { day: "03", growth: 58, traffic: 7743 },
          { day: "04", growth: 82, traffic: 2280 },
          { day: "05", growth: 54, traffic: 4480 },
        ],
        X = function (e) {
          var s = e.payload;
          return e.active
            ? (0, i.jsxs)("div", {
                style: {
                  padding: "3px 7px",
                  background: "rgba(60,70,75,.9)",
                  fontSize: 9,
                  color: "#fff",
                  borderRadius: 2,
                },
                children: [s[0].value, "%"],
              })
            : null;
        },
        q = function () {
          return (0, i.jsxs)("div", {
            className: "view-header d-flex align-items-center",
            children: [
              (0, i.jsxs)("header", {
                className: "text-white",
                children: [
                  (0, i.jsx)("h1", {
                    className: "h5 title text-uppercase",
                    children: "Dashboard",
                  }),
                  (0, i.jsxs)("p", {
                    className: "mb-0 subtitle text-nowrap",
                    children: [
                      "Latest statistics\xa0",
                      (0, i.jsx)("span", {
                        className: "hidden-sm-down",
                        children: "& summary",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "ml-auto d-flex mt-2",
                children: [
                  (0, i.jsxs)("div", {
                    className: "hidden-sm-down",
                    children: [
                      (0, i.jsxs)(c.w, {
                        width: 100,
                        height: 35,
                        data: G,
                        children: [
                          (0, i.jsx)(r.x, {
                            type: "monotone",
                            dataKey: "growth",
                            stroke: "#FFEA00",
                            strokeWidth: 1,
                            dot: { strokeWidth: 0, r: 2 },
                          }),
                          (0, i.jsx)(d.u, { content: (0, i.jsx)(X, {}) }),
                        ],
                      }),
                      (0, i.jsx)("p", {
                        className: "small text-uppercase text-white",
                        children: "Income Growth",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "ml-5",
                    children: [
                      (0, i.jsx)(h.v, {
                        width: 100,
                        height: 35,
                        data: G,
                        children: (0, i.jsx)(o.$, {
                          type: "monotone",
                          dataKey: "traffic",
                          fill: "#FFEA00",
                        }),
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "small text-uppercase text-white text-nowrap",
                        children: "Weekly Traffic",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        H = [
          { name: "Jun", iphone: 4e3, imac: 2400 },
          { name: "Jul", iphone: 3e3, imac: 1398 },
          { name: "Aug", iphone: 2e3, imac: 2200 },
          { name: "Sep", iphone: 2780, imac: 3008 },
          { name: "Oct", iphone: 1890, imac: 2800 },
          { name: "Nov", iphone: 2390, imac: 3200 },
          { name: "Dec", iphone: 3490, imac: 3300 },
        ],
        Y = [
          { uv: 2034, sales: 623, br: 56, ns: 2343 },
          { uv: 2734, sales: 1223, br: 43, ns: 3200 },
          { uv: 2522, sales: 723, br: 64, ns: 3063 },
          { uv: 2944, sales: 1043, br: 44, ns: 3666 },
          { uv: 1822, sales: 433, br: 74, ns: 1909 },
        ],
        Q = [
          { name: "Direct", value: 23 },
          { name: "Referral", value: 8 },
          { name: "Organic", value: 44 },
          { name: "Social", value: 25 },
        ],
        U = ["#448AFF", "#00E676", "#7C4DFF", "#40C4FF"],
        ee = [
          {
            date: "22 Mar",
            name: "John Doe",
            earnings: "$304",
            status: "pending",
          },
          {
            date: "12 Feb",
            name: "Maria Smith",
            earnings: "$834",
            status: "done",
          },
          {
            date: "28 Jan",
            name: "Sofia Andre",
            earnings: "$943",
            status: "done",
          },
          {
            date: "03 May",
            name: "Jean Wilkinson",
            earnings: "$1234",
            status: "pending",
          },
          {
            date: "10 Mar",
            name: "Alisha Seth",
            earnings: "$534",
            status: "done",
          },
        ],
        se = function () {
          return (0, i.jsx)(x.h, {
            children: (0, i.jsxs)(m.T, {
              data: H,
              margin: { top: 10, right: 10, left: -15, bottom: 0 },
              children: [
                (0, i.jsx)(j.K, {
                  dataKey: "name",
                  axisLine: !1,
                  fontSize: 10,
                  tickLine: !1,
                  padding: { left: 0, right: 5 },
                }),
                (0, i.jsx)(u.B, { fontSize: 10, axisLine: !1, tickLine: !1 }),
                (0, i.jsx)(f.q, { stroke: "#eee", vertical: !1 }),
                (0, i.jsx)(d.u, { wrapperStyle: { borderColor: "#eee" } }),
                (0, i.jsx)(p.D, {}),
                (0, i.jsx)(g.u, {
                  type: "monotone",
                  dataKey: "iphone",
                  stackId: "1",
                  strokeWidth: 2,
                  stroke: "#448AFF",
                  fill: "#448AFF",
                  fillOpacity: ".8",
                }),
                (0, i.jsx)(g.u, {
                  type: "monotone",
                  dataKey: "imac",
                  stackId: "1",
                  strokeWidth: 2,
                  stroke: "#69F0AE",
                  fill: "#69F0AE",
                  fillOpacity: ".8",
                }),
              ],
            }),
          });
        },
        ae = function (e) {
          var s = e.dataKey,
            a = e.stroke,
            l = e.fill;
          return (0, i.jsx)(x.h, {
            children: (0, i.jsxs)(m.T, {
              data: Y,
              margin: { top: 0, bottom: 0, right: 0, left: 0 },
              children: [
                (0, i.jsx)(d.u, {
                  labelStyle: { display: "none" },
                  itemStyle: { fontSize: 10, color: "#fff" },
                  wrapperStyle: {
                    padding: "0 4px",
                    background: "rgba(40,70,80, .94)",
                    border: "none",
                  },
                }),
                (0, i.jsx)(g.u, {
                  type: "monotone",
                  dataKey: s,
                  stroke: a,
                  fill: l,
                  strokeWidth: 2,
                  fillOpacity: ".8",
                }),
              ],
            }),
          });
        },
        le = function (e) {
          var s = Math.PI / 180,
            a = e.cx,
            l = e.cy,
            n = e.midAngle,
            t = e.innerRadius,
            c = e.outerRadius,
            r = e.startAngle,
            d = e.endAngle,
            h = e.fill,
            o = e.payload,
            x = e.percent,
            m = Math.sin(-s * n),
            j = Math.cos(-s * n),
            u = a + (c + 10) * j,
            f = l + (c + 10) * m,
            p = a + (c + 30) * j,
            g = l + (c + 30) * m,
            b = p + 22 * (j >= 0 ? 1 : -1),
            v = g,
            w = j >= 0 ? "start" : "end";
          return (0, i.jsxs)("g", {
            children: [
              (0, i.jsx)("text", {
                x: a,
                y: l,
                dy: 8,
                textAnchor: "middle",
                fill: h,
                children: o.name,
              }),
              (0, i.jsx)(N.L, {
                cx: a,
                cy: l,
                innerRadius: t,
                outerRadius: c,
                startAngle: r,
                endAngle: d,
                fill: h,
              }),
              (0, i.jsx)(N.L, {
                cx: a,
                cy: l,
                startAngle: r,
                endAngle: d,
                innerRadius: c + 6,
                outerRadius: c + 10,
                fill: h,
              }),
              (0, i.jsx)("path", {
                d: "M"
                  .concat(u, ",")
                  .concat(f, "L")
                  .concat(p, ",")
                  .concat(g, "L")
                  .concat(b, ",")
                  .concat(v),
                stroke: h,
                fill: "none",
              }),
              (0, i.jsx)("circle", {
                cx: b,
                cy: v,
                r: 2,
                fill: h,
                stroke: "none",
              }),
              (0, i.jsx)("text", {
                x: b + 12 * (j >= 0 ? 1 : -1),
                y: v,
                textAnchor: w,
                fill: "#333",
                children: "".concat(o.name),
              }),
              (0, i.jsx)("text", {
                x: b + 12 * (j >= 0 ? 1 : -1),
                y: v,
                dy: 18,
                textAnchor: w,
                fill: "#999",
                fontSize: 12,
                children: "(".concat((100 * x).toFixed(2), "%)"),
              }),
            ],
          });
        },
        ie = function (e) {
          var s = n.useState(0),
            a = (0, l.Z)(s, 2),
            t = a[0],
            c = a[1];
          return (0, i.jsx)(x.h, {
            children: (0, i.jsxs)(b.u, {
              children: [
                (0, i.jsx)(v.b, {
                  onMouseEnter: function (e, s) {
                    c(s);
                  },
                  data: Q,
                  activeIndex: t,
                  activeShape: le,
                  outerRadius: 90,
                  dataKey: "value",
                  innerRadius: 70,
                  paddingAngle: 4,
                  children: Q.map(function (e, s) {
                    return (0, i.jsx)(w.b, { fill: U[s] }, s);
                  }),
                }),
                (0, i.jsx)(p.D, {}),
              ],
            }),
          });
        },
        ne = function (e) {
          var s = e.data;
          return (0, i.jsx)("table", {
            className: "table",
            children: (0, i.jsx)("tbody", {
              children: s.map(function (e, s) {
                return (0,
                i.jsxs)("tr", { children: [(0, i.jsxs)("td", { className: "d-flex flex-column", children: [(0, i.jsx)("strong", { children: e.name }), (0, i.jsx)("small", { children: e.date })] }), (0, i.jsx)("td", { className: "align-middle", children: e.earnings }), (0, i.jsxs)("td", { className: "align-middle text-nowrap", children: [(0, i.jsx)(B(), { size: "12", color: "done" === e.status ? "#4CAF50" : "#F44336" }), "\xa0", e.status] })] }, s);
              }),
            }),
          });
        },
        te = function () {
          return (0, i.jsxs)("div", {
            className: "view-content view-dashboard",
            children: [
              (0, i.jsxs)(y.Z, {
                className: "sales-card mb-4",
                children: [
                  (0, i.jsx)(F.Z, {
                    style: { flex: "3 0 0" },
                    children: (0, i.jsxs)(Z.Z, {
                      children: [
                        (0, i.jsx)(k.Z, {
                          className: "text-uppercase h6",
                          children: "Sales Statistics",
                        }),
                        (0, i.jsx)("div", {
                          className: "small mb-4 card-subtitle",
                          children: "Growth over time",
                        }),
                        (0, i.jsx)("div", {
                          style: { width: "100%", height: "280px" },
                          children: (0, i.jsx)(se, {}),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)(F.Z, {
                    children: [
                      (0, i.jsxs)(Z.Z, {
                        children: [
                          (0, i.jsx)("h6", {
                            className:
                              "text-uppercase title font-weight-bold small",
                            children: "Net Income",
                          }),
                          (0, i.jsxs)("h4", {
                            className: "font-weight-normal mb-0",
                            children: [
                              (0, i.jsx)(E(), { size: "16", color: "#00c853" }),
                              "23,500",
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(Z.Z, {
                        children: [
                          (0, i.jsx)("h6", {
                            className:
                              "text-uppercase title font-weight-bold small text-nowrap",
                            children: "Forecast Income",
                          }),
                          (0, i.jsxs)("h4", {
                            className: "font-weight-normal mb-0",
                            children: [
                              (0, i.jsx)(E(), { size: "16", color: "#00c853" }),
                              "83,230",
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(Z.Z, {
                        children: [
                          (0, i.jsx)("h6", {
                            className:
                              "text-uppercase title font-weight-bold small",
                            children: "Pageviews",
                          }),
                          (0, i.jsxs)("h4", {
                            className: "font-weight-normal mb-0",
                            children: [
                              (0, i.jsx)(R(), { size: "16", color: "#00c853" }),
                              "21,32,520",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(A.Z, {
                children: [
                  (0, i.jsxs)("div", {
                    className: "col-sm-6 col-md-3",
                    children: [
                      (0, i.jsxs)(F.Z, {
                        className: "mb-4",
                        children: [
                          (0, i.jsxs)(Z.Z, {
                            children: [
                              (0, i.jsx)(k.Z, {
                                className:
                                  "text-uppercase small font-weight-bold",
                                children: "New Visitors",
                              }),
                              (0, i.jsxs)("div", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className: "mr-2 font-weight-normal",
                                    children: "2,544",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "small",
                                    children: [
                                      (0, i.jsx)(D(), { size: "14" }),
                                      (0, i.jsx)("span", {
                                        className: "badge badge-danger",
                                        children: "-28%",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            style: { width: "100%", height: "60px" },
                            children: (0, i.jsx)(ae, {
                              dataKey: "uv",
                              stroke: "#69F0AE",
                              fill: "#69F0AE",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(F.Z, {
                        className: "mb-4",
                        children: [
                          (0, i.jsxs)(Z.Z, {
                            children: [
                              (0, i.jsx)(k.Z, {
                                className:
                                  "text-uppercase small font-weight-bold",
                                children: "Bounce Rate",
                              }),
                              (0, i.jsxs)("div", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className: "mr-2 font-weight-normal",
                                    children: "65%",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "small",
                                    children: [
                                      (0, i.jsx)(D(), { size: "14" }),
                                      (0, i.jsx)("span", {
                                        className: "badge badge-danger",
                                        children: "-12%",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            style: { width: "100%", height: "60px" },
                            children: (0, i.jsx)(ae, {
                              dataKey: "br",
                              stroke: "#7C4DFF",
                              fill: "#7C4DFF",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "col-sm-6 col-md-3",
                    children: [
                      (0, i.jsxs)(F.Z, {
                        className: "mb-4",
                        children: [
                          (0, i.jsxs)(Z.Z, {
                            children: [
                              (0, i.jsx)(k.Z, {
                                className:
                                  "text-uppercase small font-weight-bold",
                                children: "Purchases",
                              }),
                              (0, i.jsxs)("div", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className: "mr-2 font-weight-normal",
                                    children: "789",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "small",
                                    children: [
                                      (0, i.jsx)(C(), { size: "14" }),
                                      (0, i.jsx)("span", {
                                        className: "badge badge-success",
                                        children: "+8%",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            style: { width: "100%", height: "60px" },
                            children: (0, i.jsx)(ae, {
                              dataKey: "sales",
                              stroke: "#448AFF",
                              fill: "#448AFF",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(F.Z, {
                        className: "mb-4",
                        children: [
                          (0, i.jsxs)(Z.Z, {
                            children: [
                              (0, i.jsx)(k.Z, {
                                className:
                                  "text-uppercase small font-weight-bold",
                                children: "New Sessions",
                              }),
                              (0, i.jsxs)("div", {
                                className: "d-flex align-items-center",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className: "mr-2 font-weight-normal",
                                    children: "2994",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "small",
                                    children: [
                                      (0, i.jsx)(C(), { size: "14" }),
                                      (0, i.jsx)("span", {
                                        className: "badge badge-success",
                                        children: "+19%",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            style: { width: "100%", height: "60px" },
                            children: (0, i.jsx)(ae, {
                              dataKey: "ns",
                              stroke: "#40C4FF",
                              fill: "#40C4FF",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "mb-4 col-sm-12 col-md-6",
                    children: (0, i.jsx)(F.Z, {
                      children: (0, i.jsxs)(Z.Z, {
                        children: [
                          (0, i.jsx)(k.Z, {
                            className: "text-uppercase h6",
                            children: "Traffic Sources",
                          }),
                          (0, i.jsx)("div", {
                            style: { width: "100%", height: "276px" },
                            children: (0, i.jsx)(ie, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(A.Z, {
                children: [
                  (0, i.jsx)("div", {
                    className: "col-md-5 mb-4",
                    children: (0, i.jsx)(F.Z, {
                      children: (0, i.jsxs)(Z.Z, {
                        children: [
                          (0, i.jsx)(k.Z, {
                            className: "h6 text-uppercase",
                            children: "Recent Activities",
                          }),
                          (0, i.jsx)("div", {
                            className: "small mb-4 card-subtitle",
                            children: "At a glance",
                          }),
                          (0, i.jsxs)("div", {
                            className: "d-flex mb-4 align-items-center",
                            children: [
                              (0, i.jsx)(I(), {
                                size: "52",
                                style: { border: "1px solid #eee" },
                                className:
                                  "mr-3 text-success rounded-circle p-3",
                              }),
                              (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("h6", {
                                    className: "font-weight-semi-bold",
                                    children: "Jenna enclosed a doc.",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "small",
                                    children: "3 min ago",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "d-flex mb-4 align-items-center",
                            children: [
                              (0, i.jsx)(T(), {
                                size: "52",
                                style: { border: "1px solid #eee" },
                                className: " text-info mr-3 rounded-circle p-3",
                              }),
                              (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("h6", {
                                    className: "font-weight-semi-bold",
                                    children: "Richard is now out of town.",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "small",
                                    children: "1 hour ago",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "d-flex mb-4 align-items-center",
                            children: [
                              (0, i.jsx)(J(), {
                                size: "52",
                                style: { border: "1px solid #eee" },
                                className:
                                  " text-danger mr-3 rounded-circle p-3",
                              }),
                              (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("h6", {
                                    className: "font-weight-semi-bold",
                                    children:
                                      "Your domain will expire in 4 days",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "small",
                                    children: "5 hours ago",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "d-flex mb-4 align-items-center",
                            children: [
                              (0, i.jsx)(P(), {
                                size: "52",
                                style: { border: "1px solid #eee" },
                                className:
                                  " text-primary mr-3 rounded-circle p-3",
                              }),
                              (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("h6", {
                                    className: "font-weight-semi-bold",
                                    children: "Henry just purchased an item",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "small",
                                    children: "4 days ago",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "text-right",
                            children: (0, i.jsx)("button", {
                              className: "btn btn-sm btn-success",
                              children: "View All",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "col-md-7 mb-4",
                    children: (0, i.jsx)(F.Z, {
                      children: (0, i.jsxs)(Z.Z, {
                        className: "table-responsive",
                        children: [
                          (0, i.jsx)(k.Z, {
                            className: "text-uppercase h6",
                            children: "Latest Transactions",
                          }),
                          (0, i.jsx)("div", {
                            className: "small mb-4 card-subtitle",
                            children: (0, i.jsx)(S.Z, {
                              color: "primary",
                              size: "sm",
                              children: "View all",
                            }),
                          }),
                          (0, i.jsx)(ne, { data: ee }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function ce() {
        return (0, i.jsxs)(t.Z, {
          children: [(0, i.jsx)(q, {}), (0, i.jsx)(te, {})],
        });
      }
    },
    55890: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index2",
        function () {
          return a(40990);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 351, 658, 572, 707, 260, 889, 522], function () {
      return (s = 55890), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
