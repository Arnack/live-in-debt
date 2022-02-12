(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34],
  {
    41788: function (t, e, o) {
      "use strict";
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      o.d(e, {
        Z: function () {
          return i;
        },
      });
    },
    75708: function (t, e, o) {
      var i;
      "undefined" != typeof self && self,
        (t.exports =
          ((i = o(67294)),
          (function (t) {
            function e(i) {
              if (o[i]) return o[i].exports;
              var r = (o[i] = { i: i, l: !1, exports: {} });
              return (
                t[i].call(r.exports, r, r.exports, e), (r.l = !0), r.exports
              );
            }
            var o = {};
            return (
              (e.m = t),
              (e.c = o),
              (e.d = function (t, o, i) {
                e.o(t, o) ||
                  Object.defineProperty(t, o, {
                    configurable: !1,
                    enumerable: !0,
                    get: i,
                  });
              }),
              (e.n = function (t) {
                var o =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return e.d(o, "a", o), o;
              }),
              (e.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (e.p = ""),
              e((e.s = 0))
            );
          })([
            function (t, e, o) {
              "use strict";
              function i() {
                return (i =
                  Object.assign ||
                  function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var o = arguments[e];
                      for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) &&
                          (t[i] = o[i]);
                    }
                    return t;
                  }).apply(this, arguments);
              }
              function r(t) {
                return l(t) || a(t) || s(t) || n();
              }
              function n() {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              function s(t, e) {
                if (t) {
                  if ("string" == typeof t) return p(t, e);
                  var o = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === o && t.constructor && (o = t.constructor.name),
                    "Map" === o || "Set" === o
                      ? Array.from(t)
                      : "Arguments" === o ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                      ? p(t, e)
                      : void 0
                  );
                }
              }
              function a(t) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t["@@iterator"]
                )
                  return Array.from(t);
              }
              function l(t) {
                if (Array.isArray(t)) return p(t);
              }
              function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var o = 0, i = new Array(e); o < e; o++) i[o] = t[o];
                return i;
              }
              function h(t) {
                return (h =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      })(t);
              }
              Object.defineProperty(e, "__esModule", { value: !0 });
              var c = o(1),
                u = o.n(c),
                d =
                  "undefined" != typeof window
                    ? c.useLayoutEffect
                    : c.useEffect,
                f = Object(c.forwardRef)(function (t, e) {
                  var o = Object(c.useRef)(),
                    n = Object(c.useRef)();
                  return (
                    d(function () {
                      function e() {
                        var e =
                            t.highcharts ||
                            ("object" ===
                              ("undefined" == typeof window
                                ? "undefined"
                                : h(window)) &&
                              window.Highcharts),
                          i = t.constructorType || "chart";
                        e
                          ? e[i]
                            ? t.options
                              ? (n.current = e[i](
                                  o.current,
                                  t.options,
                                  t.callback ? t.callback : void 0
                                ))
                              : console.warn(
                                  'The "options" property was not passed.'
                                )
                            : console.warn(
                                'The "constructorType" property is incorrect or some required module is not imported.'
                              )
                          : console.warn(
                              'The "highcharts" property was not passed.'
                            );
                      }
                      if (n.current) {
                        if (!1 !== t.allowChartUpdate)
                          if (!t.immutable && n.current) {
                            var i;
                            (i = n.current).update.apply(
                              i,
                              [t.options].concat(r(t.updateArgs || [!0, !0]))
                            );
                          } else e();
                      } else e();
                    }),
                    d(function () {
                      return function () {
                        n.current && (n.current.destroy(), (n.current = null));
                      };
                    }, []),
                    Object(c.useImperativeHandle)(
                      e,
                      function () {
                        return {
                          get chart() {
                            return n.current;
                          },
                          container: o,
                        };
                      },
                      []
                    ),
                    u.a.createElement(
                      "div",
                      i({}, t.containerProps, { ref: o })
                    )
                  );
                });
              e.default = Object(c.memo)(f);
            },
            function (t, e) {
              t.exports = i;
            },
          ])));
    },
    92414: function (t, e, o) {
      "use strict";
      var i, r, n;
      (n = function (t) {
        function e(t, e, o, i) {
          t.hasOwnProperty(e) || (t[e] = i.apply(null, o));
        }
        e(
          (t = t ? t._modules : {}),
          "Core/Axis/Color/ColorAxisComposition.js",
          [t["Core/Color/Color.js"], t["Core/Utilities.js"]],
          function (t, e) {
            var o,
              i = t.parse,
              r = e.addEvent,
              n = e.extend,
              s = e.merge,
              a = e.pick,
              l = e.splat;
            return (
              (function (t) {
                function e() {
                  var t = this,
                    e = this.options;
                  (this.colorAxis = []),
                    e.colorAxis &&
                      ((e.colorAxis = l(e.colorAxis)),
                      e.colorAxis.forEach(function (e, o) {
                        (e.index = o), new b(t, e);
                      }));
                }
                function o(t) {
                  var e,
                    o,
                    i = this,
                    r = function (e) {
                      -1 !== (e = t.allItems.indexOf(e)) &&
                        (i.destroyItem(t.allItems[e]), t.allItems.splice(e, 1));
                    },
                    n = [];
                  for (
                    (this.chart.colorAxis || []).forEach(function (t) {
                      (e = t.options) &&
                        e.showInLegend &&
                        (e.dataClasses && e.visible
                          ? (n = n.concat(t.getDataClassLegendSymbols()))
                          : e.visible && n.push(t),
                        t.series.forEach(function (t) {
                          (t.options.showInLegend && !e.dataClasses) ||
                            ("point" === t.options.legendType
                              ? t.points.forEach(function (t) {
                                  r(t);
                                })
                              : r(t));
                        }));
                    }),
                      o = n.length;
                    o--;

                  )
                    t.allItems.unshift(n[o]);
                }
                function p(t) {
                  t.visible &&
                    t.item.legendColor &&
                    t.item.legendSymbol.attr({ fill: t.item.legendColor });
                }
                function h() {
                  var t = this.chart.colorAxis;
                  t &&
                    t.forEach(function (t, e, o) {
                      t.update({}, o);
                    });
                }
                function c() {
                  ((this.chart.colorAxis && this.chart.colorAxis.length) ||
                    this.colorAttribs) &&
                    this.translateColors();
                }
                function u() {
                  var t = this.axisTypes;
                  t
                    ? -1 === t.indexOf("colorAxis") && t.push("colorAxis")
                    : (this.axisTypes = ["colorAxis"]);
                }
                function d(t) {
                  var e = this,
                    o = t ? "show" : "hide";
                  (e.visible = e.options.visible = !!t),
                    ["graphic", "dataLabel"].forEach(function (t) {
                      e[t] && e[t][o]();
                    }),
                    this.series.buildKDTree();
                }
                function f() {
                  var t = this,
                    e = this.options.nullColor,
                    o = this.colorAxis,
                    i = this.colorKey;
                  (this.data.length ? this.data : this.points).forEach(
                    function (r) {
                      var n = r.getNestedProperty(i);
                      (n =
                        r.options.color ||
                        (r.isNull || null === r.value
                          ? e
                          : o && "undefined" !== typeof n
                          ? o.toColor(n, r)
                          : r.color || t.color)) &&
                        r.color !== n &&
                        ((r.color = n),
                        "point" === t.options.legendType &&
                          r.legendItem &&
                          t.chart.legend.colorizeItem(r, r.visible));
                    }
                  );
                }
                function y(t) {
                  var e = t.prototype.createAxis;
                  t.prototype.createAxis = function (t, o) {
                    if ("colorAxis" !== t) return e.apply(this, arguments);
                    var i = new b(
                      this,
                      s(o.axis, { index: this[t].length, isX: !1 })
                    );
                    return (
                      (this.isDirtyLegend = !0),
                      this.axes.forEach(function (t) {
                        t.series = [];
                      }),
                      this.series.forEach(function (t) {
                        t.bindAxes(), (t.isDirtyData = !0);
                      }),
                      a(o.redraw, !0) && this.redraw(o.animation),
                      i
                    );
                  };
                }
                function m() {
                  this.elem.attr(
                    "fill",
                    i(this.start).tweenTo(i(this.end), this.pos),
                    void 0,
                    !0
                  );
                }
                function g() {
                  this.elem.attr(
                    "stroke",
                    i(this.start).tweenTo(i(this.end), this.pos),
                    void 0,
                    !0
                  );
                }
                var b,
                  v = [];
                (t.compose = function (t, i, s, a, l) {
                  b || (b = t),
                    -1 === v.indexOf(i) &&
                      (v.push(i),
                      (t = i.prototype).collectionsWithUpdate.push("colorAxis"),
                      (t.collectionsWithInit.colorAxis = [t.addColorAxis]),
                      r(i, "afterGetAxes", e),
                      y(i)),
                    -1 === v.indexOf(s) &&
                      (v.push(s),
                      ((i = s.prototype).fillSetter = m),
                      (i.strokeSetter = g)),
                    -1 === v.indexOf(a) &&
                      (v.push(a),
                      r(a, "afterGetAllItems", o),
                      r(a, "afterColorizeItem", p),
                      r(a, "afterUpdate", h)),
                    -1 === v.indexOf(l) &&
                      (v.push(l),
                      n(l.prototype, {
                        optionalAxis: "colorAxis",
                        translateColors: f,
                      }),
                      n(l.prototype.pointClass.prototype, { setVisible: d }),
                      r(l, "afterTranslate", c),
                      r(l, "bindAxes", u));
                }),
                  (t.pointSetVisible = d);
              })(o || (o = {})),
              o
            );
          }
        ),
          e(t, "Core/Axis/Color/ColorAxisDefaults.js", [], function () {
            return {
              lineWidth: 0,
              minPadding: 0,
              maxPadding: 0,
              gridLineWidth: 1,
              tickPixelInterval: 72,
              startOnTick: !0,
              endOnTick: !0,
              offset: 0,
              marker: {
                animation: { duration: 50 },
                width: 0.01,
                color: "#999999",
              },
              labels: { overflow: "justify", rotation: 0 },
              minColor: "#e6ebf5",
              maxColor: "#003399",
              tickLength: 5,
              showInLegend: !0,
            };
          }),
          e(
            t,
            "Core/Axis/Color/ColorAxis.js",
            [
              t["Core/Axis/Axis.js"],
              t["Core/Color/Color.js"],
              t["Core/Axis/Color/ColorAxisComposition.js"],
              t["Core/Axis/Color/ColorAxisDefaults.js"],
              t["Core/Globals.js"],
              t["Core/Legend/LegendSymbol.js"],
              t["Core/Series/SeriesRegistry.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i, r, n, s, a) {
              var l =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                p = e.parse,
                h = r.noop,
                c = s.series,
                u = a.extend,
                d = a.isNumber,
                f = a.merge,
                y = a.pick;
              return (
                (e = (function (t) {
                  function e(e, o) {
                    var i = t.call(this, e, o) || this;
                    return (
                      (i.beforePadding = !1),
                      (i.chart = void 0),
                      (i.coll = "colorAxis"),
                      (i.dataClasses = void 0),
                      (i.legendItem = void 0),
                      (i.legendItems = void 0),
                      (i.name = ""),
                      (i.options = void 0),
                      (i.stops = void 0),
                      (i.visible = !0),
                      i.init(e, o),
                      i
                    );
                  }
                  return (
                    l(e, t),
                    (e.compose = function (t, i, r, n) {
                      o.compose(e, t, i, r, n);
                    }),
                    (e.prototype.init = function (o, i) {
                      var r = o.options.legend || {},
                        n = i.layout
                          ? "vertical" !== i.layout
                          : "vertical" !== r.layout,
                        s = i.visible;
                      (r = f(e.defaultColorAxisOptions, i, {
                        showEmpty: !1,
                        title: null,
                        visible: r.enabled && !1 !== s,
                      })),
                        (this.coll = "colorAxis"),
                        (this.side = i.side || n ? 2 : 1),
                        (this.reversed = i.reversed || !n),
                        (this.opposite = !n),
                        t.prototype.init.call(this, o, r),
                        (this.userOptions.visible = s),
                        i.dataClasses && this.initDataClasses(i),
                        this.initStops(),
                        (this.horiz = n),
                        (this.zoomEnabled = !1);
                    }),
                    (e.prototype.initDataClasses = function (t) {
                      var e,
                        o = this.chart,
                        i = this.options,
                        r = t.dataClasses.length,
                        n = 0,
                        s = o.options.chart.colorCount;
                      (this.dataClasses = e = []),
                        (this.legendItems = []),
                        (t.dataClasses || []).forEach(function (t, a) {
                          (t = f(t)),
                            e.push(t),
                            (!o.styledMode && t.color) ||
                              ("category" === i.dataClassColor
                                ? (o.styledMode ||
                                    ((a = o.options.colors),
                                    (s = a.length),
                                    (t.color = a[n])),
                                  (t.colorIndex = n),
                                  ++n === s && (n = 0))
                                : (t.color = p(i.minColor).tweenTo(
                                    p(i.maxColor),
                                    2 > r ? 0.5 : a / (r - 1)
                                  )));
                        });
                    }),
                    (e.prototype.hasData = function () {
                      return !!(this.tickPositions || []).length;
                    }),
                    (e.prototype.setTickPositions = function () {
                      if (!this.dataClasses)
                        return t.prototype.setTickPositions.call(this);
                    }),
                    (e.prototype.initStops = function () {
                      (this.stops = this.options.stops || [
                        [0, this.options.minColor],
                        [1, this.options.maxColor],
                      ]),
                        this.stops.forEach(function (t) {
                          t.color = p(t[1]);
                        });
                    }),
                    (e.prototype.setOptions = function (e) {
                      t.prototype.setOptions.call(this, e),
                        (this.options.crosshair = this.options.marker);
                    }),
                    (e.prototype.setAxisSize = function () {
                      var t,
                        o,
                        i = this.legendSymbol,
                        r = this.chart,
                        n = r.options.legend || {};
                      i
                        ? ((this.left = n = i.attr("x")),
                          (this.top = t = i.attr("y")),
                          (this.width = o = i.attr("width")),
                          (this.height = i = i.attr("height")),
                          (this.right = r.chartWidth - n - o),
                          (this.bottom = r.chartHeight - t - i),
                          (this.len = this.horiz ? o : i),
                          (this.pos = this.horiz ? n : t))
                        : (this.len =
                            (this.horiz ? n.symbolWidth : n.symbolHeight) ||
                            e.defaultLegendLength);
                    }),
                    (e.prototype.normalizedValue = function (t) {
                      return (
                        this.logarithmic && (t = this.logarithmic.log2lin(t)),
                        1 - (this.max - t) / (this.max - this.min || 1)
                      );
                    }),
                    (e.prototype.toColor = function (t, e) {
                      var o,
                        i = this.dataClasses,
                        r = this.stops;
                      if (i)
                        for (o = i.length; o--; ) {
                          var n = i[o],
                            s = n.from;
                          if (
                            ((r = n.to),
                            ("undefined" === typeof s || t >= s) &&
                              ("undefined" === typeof r || t <= r))
                          ) {
                            var a = n.color;
                            e &&
                              ((e.dataClass = o),
                              (e.colorIndex = n.colorIndex));
                            break;
                          }
                        }
                      else {
                        for (
                          t = this.normalizedValue(t), o = r.length;
                          o-- && !(t > r[o][0]);

                        );
                        (s = r[o] || r[o + 1]),
                          (t =
                            1 -
                            ((r = r[o + 1] || s)[0] - t) / (r[0] - s[0] || 1)),
                          (a = s.color.tweenTo(r.color, t));
                      }
                      return a;
                    }),
                    (e.prototype.getOffset = function () {
                      var e = this.legendGroup,
                        o = this.chart.axisOffset[this.side];
                      e &&
                        ((this.axisParent = e),
                        t.prototype.getOffset.call(this),
                        this.added ||
                          ((this.added = !0),
                          (this.labelLeft = 0),
                          (this.labelRight = this.width)),
                        (this.chart.axisOffset[this.side] = o));
                    }),
                    (e.prototype.setLegendColor = function () {
                      var t = this.reversed,
                        e = t ? 1 : 0;
                      (t = t ? 0 : 1),
                        (e = this.horiz ? [e, 0, t, 0] : [0, t, 0, e]),
                        (this.legendColor = {
                          linearGradient: {
                            x1: e[0],
                            y1: e[1],
                            x2: e[2],
                            y2: e[3],
                          },
                          stops: this.stops,
                        });
                    }),
                    (e.prototype.drawLegendSymbol = function (t, o) {
                      var i = t.padding,
                        r = t.options,
                        n = this.horiz,
                        s = y(r.symbolWidth, n ? e.defaultLegendLength : 12),
                        a = y(r.symbolHeight, n ? 12 : e.defaultLegendLength),
                        l = y(r.labelPadding, n ? 16 : 30);
                      (r = y(r.itemDistance, 10)),
                        this.setLegendColor(),
                        (o.legendSymbol = this.chart.renderer
                          .rect(0, t.baseline - 11, s, a)
                          .attr({ zIndex: 1 })
                          .add(o.legendGroup)),
                        (this.legendItemWidth = s + i + (n ? r : l)),
                        (this.legendItemHeight = a + i + (n ? l : 0));
                    }),
                    (e.prototype.setState = function (t) {
                      this.series.forEach(function (e) {
                        e.setState(t);
                      });
                    }),
                    (e.prototype.setVisible = function () {}),
                    (e.prototype.getSeriesExtremes = function () {
                      var t,
                        e = this.series,
                        o = e.length;
                      for (this.dataMin = 1 / 0, this.dataMax = -1 / 0; o--; ) {
                        var i = e[o],
                          r = (i.colorKey = y(
                            i.options.colorKey,
                            i.colorKey,
                            i.pointValKey,
                            i.zoneAxis,
                            "y"
                          )),
                          n = i.pointArrayMap,
                          s = i[r + "Min"] && i[r + "Max"];
                        if (i[r + "Data"]) var a = i[r + "Data"];
                        else if (n) {
                          (a = []), (n = n.indexOf(r));
                          var l = i.yData;
                          if (0 <= n && l)
                            for (t = 0; t < l.length; t++)
                              a.push(y(l[t][n], l[t]));
                        } else a = i.yData;
                        s
                          ? ((i.minColorValue = i[r + "Min"]),
                            (i.maxColorValue = i[r + "Max"]))
                          : ((a = c.prototype.getExtremes.call(i, a)),
                            (i.minColorValue = a.dataMin),
                            (i.maxColorValue = a.dataMax)),
                          "undefined" !== typeof i.minColorValue &&
                            ((this.dataMin = Math.min(
                              this.dataMin,
                              i.minColorValue
                            )),
                            (this.dataMax = Math.max(
                              this.dataMax,
                              i.maxColorValue
                            ))),
                          s || c.prototype.applyExtremes.call(i);
                      }
                    }),
                    (e.prototype.drawCrosshair = function (e, o) {
                      var i = o && o.plotX,
                        r = o && o.plotY,
                        n = this.pos,
                        s = this.len;
                      if (o) {
                        var a = this.toPixels(
                          o.getNestedProperty(o.series.colorKey)
                        );
                        a < n ? (a = n - 2) : a > n + s && (a = n + s + 2),
                          (o.plotX = a),
                          (o.plotY = this.len - a),
                          t.prototype.drawCrosshair.call(this, e, o),
                          (o.plotX = i),
                          (o.plotY = r),
                          this.cross &&
                            !this.cross.addedToColorAxis &&
                            this.legendGroup &&
                            (this.cross
                              .addClass("highcharts-coloraxis-marker")
                              .add(this.legendGroup),
                            (this.cross.addedToColorAxis = !0),
                            this.chart.styledMode ||
                              "object" !== typeof this.crosshair ||
                              this.cross.attr({ fill: this.crosshair.color }));
                      }
                    }),
                    (e.prototype.getPlotLinePath = function (e) {
                      var o = this.left,
                        i = e.translatedValue,
                        r = this.top;
                      return d(i)
                        ? this.horiz
                          ? [
                              ["M", i - 4, r - 6],
                              ["L", i + 4, r - 6],
                              ["L", i, r],
                              ["Z"],
                            ]
                          : [
                              ["M", o, i],
                              ["L", o - 6, i + 6],
                              ["L", o - 6, i - 6],
                              ["Z"],
                            ]
                        : t.prototype.getPlotLinePath.call(this, e);
                    }),
                    (e.prototype.update = function (e, o) {
                      var i = this.chart.legend;
                      this.series.forEach(function (t) {
                        t.isDirtyData = !0;
                      }),
                        ((e.dataClasses && i.allItems) || this.dataClasses) &&
                          this.destroyItems(),
                        t.prototype.update.call(this, e, o),
                        this.legendItem &&
                          (this.setLegendColor(), i.colorizeItem(this, !0));
                    }),
                    (e.prototype.destroyItems = function () {
                      var t = this.chart;
                      this.legendItem
                        ? t.legend.destroyItem(this)
                        : this.legendItems &&
                          this.legendItems.forEach(function (e) {
                            t.legend.destroyItem(e);
                          }),
                        (t.isDirtyLegend = !0);
                    }),
                    (e.prototype.destroy = function () {
                      (this.chart.isDirtyLegend = !0),
                        this.destroyItems(),
                        t.prototype.destroy.apply(
                          this,
                          [].slice.call(arguments)
                        );
                    }),
                    (e.prototype.remove = function (e) {
                      this.destroyItems(), t.prototype.remove.call(this, e);
                    }),
                    (e.prototype.getDataClassLegendSymbols = function () {
                      var t,
                        e = this,
                        o = e.chart,
                        i = e.legendItems,
                        r = o.options.legend,
                        s = r.valueDecimals,
                        a = r.valueSuffix || "";
                      return (
                        i.length ||
                          e.dataClasses.forEach(function (r, l) {
                            var p = r.from,
                              c = r.to,
                              d = o.numberFormatter,
                              f = !0;
                            (t = ""),
                              "undefined" === typeof p
                                ? (t = "< ")
                                : "undefined" === typeof c && (t = "> "),
                              "undefined" !== typeof p && (t += d(p, s) + a),
                              "undefined" !== typeof p &&
                                "undefined" !== typeof c &&
                                (t += " - "),
                              "undefined" !== typeof c && (t += d(c, s) + a),
                              i.push(
                                u(
                                  {
                                    chart: o,
                                    name: t,
                                    options: {},
                                    drawLegendSymbol: n.drawRectangle,
                                    visible: !0,
                                    setState: h,
                                    isDataClass: !0,
                                    setVisible: function () {
                                      (f = e.visible = !f),
                                        e.series.forEach(function (t) {
                                          t.points.forEach(function (t) {
                                            t.dataClass === l &&
                                              t.setVisible(f);
                                          });
                                        }),
                                        o.legend.colorizeItem(this, f);
                                    },
                                  },
                                  r
                                )
                              );
                          }),
                        i
                      );
                    }),
                    (e.defaultColorAxisOptions = i),
                    (e.defaultLegendLength = 200),
                    (e.keepProps = [
                      "legendGroup",
                      "legendItemHeight",
                      "legendItemWidth",
                      "legendItem",
                      "legendSymbol",
                    ]),
                    e
                  );
                })(t)),
                Array.prototype.push.apply(t.keepProps, e.keepProps),
                e
              );
            }
          ),
          e(
            t,
            "Maps/MapNavigationOptionsDefault.js",
            [t["Core/DefaultOptions.js"], t["Core/Utilities.js"]],
            function (t, e) {
              return (
                (e = e.extend)(t.defaultOptions.lang, {
                  zoomIn: "Zoom in",
                  zoomOut: "Zoom out",
                }),
                (t.defaultOptions.mapNavigation = {
                  buttonOptions: {
                    alignTo: "plotBox",
                    align: "left",
                    verticalAlign: "top",
                    x: 0,
                    width: 18,
                    height: 18,
                    padding: 5,
                    style: { fontSize: "15px", fontWeight: "bold" },
                    theme: { "stroke-width": 1, "text-align": "center" },
                  },
                  buttons: {
                    zoomIn: {
                      onclick: function () {
                        this.mapZoom(0.5);
                      },
                      text: "+",
                      y: 0,
                    },
                    zoomOut: {
                      onclick: function () {
                        this.mapZoom(2);
                      },
                      text: "-",
                      y: 28,
                    },
                  },
                  mouseWheelSensitivity: 1.1,
                })
              );
            }
          ),
          e(
            t,
            "Maps/MapNavigation.js",
            [
              t["Core/Chart/Chart.js"],
              t["Core/Globals.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o) {
              function i(t) {
                t &&
                  (t.preventDefault && t.preventDefault(),
                  t.stopPropagation && t.stopPropagation(),
                  (t.cancelBubble = !0));
              }
              function r(t) {
                this.init(t);
              }
              var n = e.doc,
                s = o.addEvent,
                a = o.extend,
                l = o.isNumber,
                p = o.merge,
                h = o.objectEach,
                c = o.pick;
              (r.prototype.init = function (t) {
                (this.chart = t), (t.mapNavButtons = []);
              }),
                (r.prototype.update = function (t) {
                  var e,
                    o,
                    r,
                    n,
                    l = this.chart,
                    u = l.options.mapNavigation,
                    d = function (t) {
                      this.handler.call(l, t), i(t);
                    },
                    f = l.mapNavButtons;
                  for (
                    t &&
                    (u = l.options.mapNavigation = p(
                      l.options.mapNavigation,
                      t
                    ));
                    f.length;

                  )
                    f.pop().destroy();
                  c(u.enableButtons, u.enabled) &&
                    !l.renderer.forExport &&
                    h(u.buttons, function (t, h) {
                      (t = p(u.buttonOptions, t)),
                        !l.styledMode &&
                          t.theme &&
                          (((e = t.theme).style = p(t.theme.style, t.style)),
                          (r = (o = e.states) && o.hover),
                          (n = o && o.select),
                          delete e.states);
                      var c = l.renderer
                        .button(
                          t.text || "",
                          0,
                          0,
                          d,
                          e,
                          r,
                          n,
                          void 0,
                          "zoomIn" === h ? "topbutton" : "bottombutton"
                        )
                        .addClass(
                          "highcharts-map-navigation highcharts-" +
                            { zoomIn: "zoom-in", zoomOut: "zoom-out" }[h]
                        )
                        .attr({
                          width: t.width,
                          height: t.height,
                          title: l.options.lang[h],
                          padding: t.padding,
                          zIndex: 5,
                        })
                        .add();
                      if (
                        ((c.handler = t.onclick),
                        s(c.element, "dblclick", i),
                        f.push(c),
                        a(t, { width: c.width, height: 2 * c.height }),
                        l.hasLoaded)
                      )
                        c.align(t, !1, t.alignTo);
                      else
                        var y = s(l, "load", function () {
                          c.element && c.align(t, !1, t.alignTo), y();
                        });
                    }),
                    this.updateEvents(u);
                }),
                (r.prototype.updateEvents = function (t) {
                  var e = this.chart;
                  c(t.enableDoubleClickZoom, t.enabled) ||
                  t.enableDoubleClickZoomTo
                    ? (this.unbindDblClick =
                        this.unbindDblClick ||
                        s(e.container, "dblclick", function (t) {
                          e.pointer.onContainerDblClick(t);
                        }))
                    : this.unbindDblClick &&
                      (this.unbindDblClick = this.unbindDblClick()),
                    c(t.enableMouseWheelZoom, t.enabled)
                      ? (this.unbindMouseWheel =
                          this.unbindMouseWheel ||
                          s(
                            e.container,
                            void 0 !== n.onwheel
                              ? "wheel"
                              : void 0 !== n.onmousewheel
                              ? "mousewheel"
                              : "DOMMouseScroll",
                            function (t) {
                              return (
                                e.pointer.inClass(
                                  t.target,
                                  "highcharts-no-mousewheel"
                                ) || (e.pointer.onContainerMouseWheel(t), i(t)),
                                !1
                              );
                            }
                          ))
                      : this.unbindMouseWheel &&
                        (this.unbindMouseWheel = this.unbindMouseWheel());
                }),
                a(t.prototype, {
                  fitToBox: function (t, e) {
                    return (
                      [
                        ["x", "width"],
                        ["y", "height"],
                      ].forEach(function (o) {
                        var i = o[0];
                        (o = o[1]),
                          t[i] + t[o] > e[i] + e[o] &&
                            (t[o] > e[o]
                              ? ((t[o] = e[o]), (t[i] = e[i]))
                              : (t[i] = e[i] + e[o] - t[o])),
                          t[o] > e[o] && (t[o] = e[o]),
                          t[i] < e[i] && (t[i] = e[i]);
                      }),
                      t
                    );
                  },
                  mapZoom: function (t, e, o, i, r) {
                    this.mapView &&
                      (l(t) && (t = Math.log(t) / Math.log(0.5)),
                      this.mapView.zoomBy(
                        t,
                        l(e) && l(o)
                          ? this.mapView.projection.inverse([e, o])
                          : void 0,
                        l(i) && l(r) ? [i, r] : void 0
                      ));
                  },
                }),
                s(t, "beforeRender", function () {
                  (this.mapNavigation = new r(this)),
                    this.mapNavigation.update();
                }),
                (e.MapNavigation = r);
            }
          ),
          e(
            t,
            "Maps/MapPointer.js",
            [t["Core/Pointer.js"], t["Core/Utilities.js"]],
            function (t, e) {
              var o = e.defined,
                i = e.extend,
                r = e.pick;
              e = e.wrap;
              var n,
                s = 0;
              i(t.prototype, {
                onContainerDblClick: function (t) {
                  var e = this.chart;
                  (t = this.normalize(t)),
                    e.options.mapNavigation.enableDoubleClickZoomTo
                      ? e.pointer.inClass(t.target, "highcharts-tracker") &&
                        e.hoverPoint &&
                        e.hoverPoint.zoomTo()
                      : e.isInsidePlot(
                          t.chartX - e.plotLeft,
                          t.chartY - e.plotTop
                        ) && e.mapZoom(0.5, void 0, void 0, t.chartX, t.chartY);
                },
                onContainerMouseWheel: function (t) {
                  var e = this.chart;
                  t = this.normalize(t);
                  var i =
                    (o(t.wheelDelta) && -t.wheelDelta / 120) ||
                    t.deltaY ||
                    t.detail;
                  1 <= Math.abs(i) &&
                    ((s += Math.abs(i)),
                    n && clearTimeout(n),
                    (n = setTimeout(function () {
                      s = 0;
                    }, 50))),
                    10 > s &&
                      e.isInsidePlot(
                        t.chartX - e.plotLeft,
                        t.chartY - e.plotTop
                      ) &&
                      e.mapView &&
                      e.mapView.zoomBy(
                        (e.options.mapNavigation.mouseWheelSensitivity - 1) *
                          -i,
                        void 0,
                        [t.chartX, t.chartY],
                        !(1 > Math.abs(i)) && void 0
                      );
                },
              }),
                e(t.prototype, "zoomOption", function (t) {
                  var e = this.chart.options.mapNavigation;
                  r(e.enableTouchZoom, e.enabled) &&
                    (this.chart.options.chart.pinchType = "xy"),
                    t.apply(this, [].slice.call(arguments, 1));
                }),
                e(
                  t.prototype,
                  "pinchTranslate",
                  function (t, e, o, i, r, n, s) {
                    t.call(this, e, o, i, r, n, s),
                      "map" === this.chart.options.chart.type &&
                        this.hasZoom &&
                        ((t = i.scaleX > i.scaleY),
                        this.pinchTranslateDirection(
                          !t,
                          e,
                          o,
                          i,
                          r,
                          n,
                          s,
                          t ? i.scaleX : i.scaleY
                        ));
                  }
                );
            }
          ),
          e(
            t,
            "Series/ColorMapMixin.js",
            [
              t["Core/Globals.js"],
              t["Core/Series/Point.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o) {
              var i = t.noop;
              t = t.seriesTypes;
              var r = o.defined;
              return (
                (o = o.addEvent)(e, "afterSetState", function (t) {
                  this.moveToTopOnHover &&
                    this.graphic &&
                    this.graphic.attr({
                      zIndex: t && "hover" === t.state ? 1 : 0,
                    });
                }),
                {
                  PointMixin: {
                    dataLabelOnNull: !0,
                    moveToTopOnHover: !0,
                    isValid: function () {
                      return (
                        null !== this.value &&
                        1 / 0 !== this.value &&
                        -1 / 0 !== this.value
                      );
                    },
                  },
                  SeriesMixin: {
                    pointArrayMap: ["value"],
                    axisTypes: ["xAxis", "yAxis", "colorAxis"],
                    trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                    getSymbol: i,
                    parallelArrays: ["x", "y", "value"],
                    colorKey: "value",
                    pointAttribs: t.column.prototype.pointAttribs,
                    colorAttribs: function (t) {
                      var e = {};
                      return (
                        !r(t.color) ||
                          (t.state && "normal" !== t.state) ||
                          (e[this.colorProp || "fill"] = t.color),
                        e
                      );
                    },
                  },
                }
              );
            }
          ),
          e(t, "Maps/MapViewOptionsDefault.js", [], function () {
            return {
              center: [0, 0],
              maxZoom: void 0,
              padding: 0,
              projection: void 0,
              zoom: void 0,
            };
          }),
          e(t, "Maps/Projections/LambertConformalConic.js", [], function () {
            var t =
                Math.sign ||
                function (t) {
                  return 0 === t ? 0 : 0 < t ? 1 : -1;
                },
              e = Math.PI / 180,
              o = Math.PI / 2,
              i = 0,
              r = 0;
            return {
              init: function (n) {
                var s = (n.parallels || []).map(function (t) {
                  return t * e;
                });
                (n = s[0] || 0), (s = s[1] || n);
                var a = Math.cos(n);
                (i =
                  n === s
                    ? Math.sin(n)
                    : Math.log(a / Math.cos(s)) /
                      Math.log(Math.tan((o + s) / 2) / Math.tan((o + n) / 2))),
                  1e-10 > Math.abs(i) && (i = 1e-10 * (t(i) || 1)),
                  (r = (a * Math.pow(Math.tan((o + n) / 2), i)) / i);
              },
              forward: function (t) {
                var n = t[0] * e;
                return (
                  (t = t[1] * e),
                  0 < r
                    ? t < 1e-6 - o && (t = 1e-6 - o)
                    : t > o - 1e-6 && (t = o - 1e-6),
                  [
                    (t = r / Math.pow(Math.tan((o + t) / 2), i)) *
                      Math.sin(i * n) *
                      63.78137,
                    63.78137 * (r - t * Math.cos(i * n)),
                  ]
                );
              },
              inverse: function (n) {
                var s = n[0] / 63.78137;
                n = r - n[1] / 63.78137;
                var a = t(i) * Math.sqrt(s * s + n * n),
                  l = Math.atan2(s, Math.abs(n)) * t(n);
                return (
                  0 > n * i && (l -= Math.PI * t(s) * t(n)),
                  [l / i / e, (2 * Math.atan(Math.pow(r / a, 1 / i)) - o) / e]
                );
              },
            };
          }),
          e(t, "Maps/Projections/EqualEarth.js", [], function () {
            var t = Math.sqrt(3) / 2;
            return {
              forward: function (e) {
                var o = Math.PI / 180,
                  i = Math.asin(t * Math.sin(e[1] * o)),
                  r = i * i,
                  n = r * r * r;
                return [
                  (e[0] * o * Math.cos(i) * 74.03120656864502) /
                    (t *
                      (1.340264 +
                        3 * -0.081106 * r +
                        n * (7 * 893e-6 + 0.034164 * r))),
                  74.03120656864502 *
                    i *
                    (1.340264 + -0.081106 * r + n * (893e-6 + 0.003796 * r)),
                ];
              },
              inverse: function (e) {
                var o = e[0] / 74.03120656864502;
                e = e[1] / 74.03120656864502;
                var i,
                  r = 180 / Math.PI,
                  n = e;
                for (i = 0; 12 > i; ++i) {
                  var s = n * n,
                    a = s * s * s,
                    l =
                      n *
                        (1.340264 +
                          -0.081106 * s +
                          a * (893e-6 + 0.003796 * s)) -
                      e;
                  if (
                    ((n -= l /= s =
                      1.340264 +
                      3 * -0.081106 * s +
                      a * (7 * 893e-6 + 0.034164 * s)),
                    1e-9 > Math.abs(l))
                  )
                    break;
                }
                return [
                  (r *
                    t *
                    o *
                    (1.340264 +
                      3 * -0.081106 * (s = n * n) +
                      s * s * s * (7 * 893e-6 + 0.034164 * s))) /
                    Math.cos(n),
                  r * Math.asin(Math.sin(n) / t),
                ];
              },
            };
          }),
          e(t, "Maps/Projections/Miller.js", [], function () {
            var t = Math.PI / 4,
              e = Math.PI / 180;
            return {
              forward: function (o) {
                return [
                  o[0] * e * 63.78137,
                  79.7267125 * Math.log(Math.tan(t + 0.4 * o[1] * e)),
                ];
              },
              inverse: function (o) {
                return [
                  o[0] / 63.78137 / e,
                  (2.5 * (Math.atan(Math.exp((o[1] / 63.78137) * 0.8)) - t)) /
                    e,
                ];
              },
            };
          }),
          e(t, "Maps/Projections/Orthographic.js", [], function () {
            var t = Math.PI / 180;
            return {
              forward: function (e) {
                var o = e[0];
                return -90 > o || 90 < o
                  ? [NaN, NaN]
                  : ((e = e[1] * t),
                    [
                      Math.cos(e) * Math.sin(o * t) * 63.78460826781007,
                      63.78460826781007 * Math.sin(e),
                    ]);
              },
              inverse: function (e) {
                var o = e[0] / 63.78460826781007;
                e = e[1] / 63.78460826781007;
                var i = Math.sqrt(o * o + e * e),
                  r = Math.asin(i),
                  n = Math.sin(r);
                return [
                  Math.atan2(o * n, i * Math.cos(r)) / t,
                  Math.asin(i && (e * n) / i) / t,
                ];
              },
            };
          }),
          e(t, "Maps/Projections/WebMercator.js", [], function () {
            var t = Math.PI / 180;
            return {
              forward: function (e) {
                if (85.0511287798 < Math.abs(e[1])) return [NaN, NaN];
                var o = Math.sin(e[1] * t);
                return [
                  63.78137 * e[0] * t,
                  (63.78137 * Math.log((1 + o) / (1 - o))) / 2,
                ];
              },
              inverse: function (e) {
                return [
                  e[0] / (63.78137 * t),
                  (2 * Math.atan(Math.exp(e[1] / 63.78137)) - Math.PI / 2) / t,
                ];
              },
              maxLatitude: 85.0511287798,
            };
          }),
          e(
            t,
            "Maps/Projections/ProjectionRegistry.js",
            [
              t["Maps/Projections/LambertConformalConic.js"],
              t["Maps/Projections/EqualEarth.js"],
              t["Maps/Projections/Miller.js"],
              t["Maps/Projections/Orthographic.js"],
              t["Maps/Projections/WebMercator.js"],
            ],
            function (t, e, o, i, r) {
              return {
                EqualEarth: e,
                LambertConformalConic: t,
                Miller: o,
                Orthographic: i,
                WebMercator: r,
              };
            }
          ),
          e(
            t,
            "Maps/Projection.js",
            [
              t["Maps/Projections/ProjectionRegistry.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e) {
              var o =
                  (this && this.__spreadArrays) ||
                  function () {
                    for (var t = 0, e = 0, o = arguments.length; e < o; e++)
                      t += arguments[e].length;
                    t = Array(t);
                    var i = 0;
                    for (e = 0; e < o; e++)
                      for (
                        var r = arguments[e], n = 0, s = r.length;
                        n < s;
                        n++, i++
                      )
                        t[i] = r[n];
                    return t;
                  },
                i = e.erase,
                r = (2 * Math.PI) / 360,
                n = function (t) {
                  return -180 > t && (t += 360), 180 < t && (t -= 360), t;
                };
              return (function () {
                function e(t) {
                  void 0 === t && (t = {}),
                    (this.hasGeoProjection = this.hasCoordinates = !1),
                    (this.maxLatitude = 90),
                    (this.options = t);
                  var o = t.name,
                    i = t.rotation;
                  this.rotator = i ? this.getRotator(i) : void 0;
                  var r = (this.def = o ? e.registry[o] : void 0),
                    n = this.rotator;
                  r &&
                    (r.init && r.init(t),
                    (this.maxLatitude = r.maxLatitude || 90),
                    (this.hasGeoProjection = !0)),
                    n && r
                      ? ((this.forward = function (t) {
                          return (t = n.forward(t)), r.forward(t);
                        }),
                        (this.inverse = function (t) {
                          return (t = r.inverse(t)), n.inverse(t);
                        }))
                      : r
                      ? ((this.forward = r.forward), (this.inverse = r.inverse))
                      : n &&
                        ((this.forward = n.forward),
                        (this.inverse = n.inverse));
                }
                return (
                  (e.add = function (t, o) {
                    e.registry[t] = o;
                  }),
                  (e.greatCircle = function (t, e, o) {
                    var i = Math.atan2,
                      n = Math.cos,
                      s = Math.sin,
                      a = Math.sqrt,
                      l = t[1] * r,
                      p = t[0] * r,
                      h = e[1] * r,
                      c = e[0] * r,
                      u = h - l,
                      d = c - p;
                    u =
                      2 *
                      i(
                        a(
                          (u =
                            s(u / 2) * s(u / 2) +
                            n(l) * n(h) * s(d / 2) * s(d / 2))
                        ),
                        a(1 - u)
                      );
                    var f = Math.round((6371e3 * u) / 5e5);
                    if (((d = []), o && d.push(t), 1 < f))
                      for (f = t = 1 / f; 0.999 > f; f += t) {
                        var y = s((1 - f) * u) / s(u),
                          m = s(f * u) / s(u),
                          g = y * n(l) * n(p) + m * n(h) * n(c),
                          b = y * n(l) * s(p) + m * n(h) * s(c);
                        (y = i((y = y * s(l) + m * s(h)), a(g * g + b * b))),
                          (g = i(b, g)),
                          d.push([g / r, y / r]);
                      }
                    return o && d.push(e), d;
                  }),
                  (e.insertGreatCircles = function (t) {
                    for (var i = t.length - 1; i--; )
                      if (
                        10 <
                        Math.max(
                          Math.abs(t[i][0] - t[i + 1][0]),
                          Math.abs(t[i][1] - t[i + 1][1])
                        )
                      ) {
                        var r = e.greatCircle(t[i], t[i + 1]);
                        r.length && t.splice.apply(t, o([i + 1, 0], r));
                      }
                  }),
                  (e.toString = function (t) {
                    var e = (t = t || {}).rotation;
                    return [t.name, e && e.join(",")].join(";");
                  }),
                  (e.prototype.getRotator = function (t) {
                    var e = t[0] * r,
                      o = (t[1] || 0) * r;
                    t = (t[2] || 0) * r;
                    var i = Math.cos(o),
                      n = Math.sin(o),
                      s = Math.cos(t),
                      a = Math.sin(t);
                    if (0 !== e || 0 !== o || 0 !== t)
                      return {
                        forward: function (t) {
                          var o = t[0] * r + e,
                            l = t[1] * r,
                            p = Math.cos(l);
                          return (
                            (t = Math.cos(o) * p),
                            (o = Math.sin(o) * p),
                            (p = (l = Math.sin(l)) * i + t * n),
                            [
                              Math.atan2(o * s - p * a, t * i - l * n) / r,
                              Math.asin(p * s + o * a) / r,
                            ]
                          );
                        },
                        inverse: function (t) {
                          var o = t[0] * r,
                            l = t[1] * r,
                            p = Math.cos(l);
                          return (
                            (t = Math.cos(o) * p),
                            (o = Math.sin(o) * p),
                            (p = (l = Math.sin(l)) * s - o * a),
                            [
                              (Math.atan2(o * s + l * a, t * i + p * n) - e) /
                                r,
                              Math.asin(p * i - t * n) / r,
                            ]
                          );
                        },
                      };
                  }),
                  (e.prototype.forward = function (t) {
                    return t;
                  }),
                  (e.prototype.inverse = function (t) {
                    return t;
                  }),
                  (e.prototype.clipOnAntimeridian = function (t, r) {
                    var s = [],
                      a = [t];
                    if (
                      (t.forEach(function (e, o) {
                        var i = t[o - 1];
                        if (!o) {
                          if (!r) return;
                          i = t[t.length - 1];
                        }
                        var n = i[0],
                          a = e[0];
                        (-90 > n || 90 < n) &&
                          (-90 > a || 90 < a) &&
                          0 < n !== 0 < a &&
                          s.push({
                            i: o,
                            lat:
                              i[1] +
                              ((180 - i[0]) / (e[0] - i[0])) * (e[1] - i[1]),
                            direction: 0 > n ? 1 : -1,
                            previousLonLat: i,
                            lonLat: e,
                          });
                      }),
                      s.length)
                    )
                      if (r) {
                        if (1 === s.length % 2) {
                          var l = s.slice().sort(function (t, e) {
                            return Math.abs(e.lat) - Math.abs(t.lat);
                          })[0];
                          i(s, l);
                        }
                        for (var p = s.length - 2; 0 <= p; ) {
                          var h = s[p].i,
                            c = n(180 + 1e-6 * s[p].direction),
                            u = n(180 - 1e-6 * s[p].direction);
                          (h = t.splice.apply(
                            t,
                            o(
                              [h, s[p + 1].i - h],
                              e.greatCircle(
                                [c, s[p].lat],
                                [c, s[p + 1].lat],
                                !0
                              )
                            )
                          )).push.apply(
                            h,
                            e.greatCircle([u, s[p + 1].lat], [u, s[p].lat], !0)
                          ),
                            a.push(h),
                            (p -= 2);
                        }
                        if (l)
                          for (h = 0; h < a.length; h++)
                            if (-1 < (u = (p = a[h]).indexOf(l.lonLat))) {
                              (h = (0 > l.lat ? -1 : 1) * this.maxLatitude),
                                (c = n(180 + 1e-6 * l.direction));
                              var d = n(180 - 1e-6 * l.direction);
                              (l = e
                                .greatCircle([c, l.lat], [c, h], !0)
                                .concat(e.greatCircle([d, h], [d, l.lat], !0))),
                                p.splice.apply(p, o([u, 0], l));
                              break;
                            }
                      } else
                        for (p = s.length; p--; )
                          (h = s[p].i),
                            (h = t.splice(h, t.length, [
                              n(180 + 1e-6 * s[p].direction),
                              s[p].lat,
                            ])).unshift([
                              n(180 - 1e-6 * s[p].direction),
                              s[p].lat,
                            ]),
                            a.push(h);
                    return a;
                  }),
                  (e.prototype.path = function (t) {
                    var o = this,
                      i = this.def,
                      r = this.rotator,
                      n = [],
                      s = "Polygon" === t.type || "MultiPolygon" === t.type,
                      a = this.hasGeoProjection,
                      l = "Orthographic" !== this.options.name,
                      p = l ? r : void 0,
                      h = (l && i) || this,
                      c = function (t) {
                        var i = [
                          (t = t.map(function (t) {
                            if (l) {
                              p && (t = p.forward(t));
                              var e = t[0];
                              1e-6 > Math.abs(e - 180) &&
                                (e = 180 > e ? 179.999999 : 180.000001),
                                (t = [e, t[1]]);
                            }
                            return t;
                          })),
                        ];
                        a &&
                          (e.insertGreatCircles(t),
                          l && (i = o.clipOnAntimeridian(t, s))),
                          i.forEach(function (t) {
                            if (!(2 > t.length))
                              for (
                                var i,
                                  r,
                                  l = !1,
                                  p = !1,
                                  c = function (t) {
                                    l
                                      ? n.push(["L", t[0], t[1]])
                                      : (n.push(["M", t[0], t[1]]), (l = !0));
                                  },
                                  u = 0;
                                u < t.length;
                                u++
                              ) {
                                var d = t[u],
                                  f = h.forward(d);
                                isNaN(f[0]) ||
                                isNaN(f[1]) ||
                                (a &&
                                  !(
                                    d[1] <= o.maxLatitude &&
                                    d[1] >= -o.maxLatitude
                                  ))
                                  ? (p = !0)
                                  : (s && !i && ((i = d), t.push(d)),
                                    p &&
                                      r &&
                                      (s && a
                                        ? e
                                            .greatCircle(r, d)
                                            .forEach(function (t) {
                                              return c(h.forward(t));
                                            })
                                        : (l = !1)),
                                    c(f),
                                    (r = d),
                                    (p = !1));
                              }
                          });
                      };
                    return (
                      "LineString" === t.type
                        ? c(t.coordinates)
                        : "MultiLineString" === t.type
                        ? t.coordinates.forEach(function (t) {
                            return c(t);
                          })
                        : "Polygon" === t.type
                        ? (t.coordinates.forEach(function (t) {
                            return c(t);
                          }),
                          n.length && n.push(["Z"]))
                        : "MultiPolygon" === t.type &&
                          (t.coordinates.forEach(function (t) {
                            t.forEach(function (t) {
                              return c(t);
                            });
                          }),
                          n.length && n.push(["Z"])),
                      n
                    );
                  }),
                  (e.registry = t),
                  e
                );
              })();
            }
          ),
          e(
            t,
            "Maps/MapView.js",
            [
              t["Maps/MapViewOptionsDefault.js"],
              t["Maps/Projection.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o) {
              var i = o.addEvent,
                r = o.clamp,
                n = o.fireEvent,
                s = o.isNumber,
                a = o.merge,
                l = o.pick,
                p = o.relativeLength;
              return (function () {
                function o(o, n) {
                  var l,
                    p,
                    h,
                    c = this;
                  (this.userOptions = n || {}),
                    (n = a(t, n)),
                    (this.chart = o),
                    (this.center = n.center),
                    (this.options = n),
                    (this.projection = new e(n.projection)),
                    (this.zoom = n.zoom || 0),
                    i(o, "afterSetChartSize", function () {
                      (void 0 !== c.minZoom && c.minZoom !== c.zoom) ||
                        (c.fitToBounds(void 0, void 0, !1),
                        s(c.userOptions.zoom) && (c.zoom = c.userOptions.zoom),
                        c.userOptions.center &&
                          a(!0, c.center, c.userOptions.center));
                    }),
                    i(
                      o,
                      "pan",
                      (n = function (t) {
                        var e = o.pointer.pinchDown,
                          i = o.mouseDownX,
                          n = o.mouseDownY;
                        if (
                          (1 === e.length &&
                            ((i = e[0].chartX), (n = e[0].chartY)),
                          "number" === typeof i && "number" === typeof n)
                        ) {
                          var s = i + "," + n,
                            a = t.originalEvent;
                          (e = a.chartX),
                            (a = a.chartY),
                            s !== p &&
                              ((p = s),
                              (l = c.projection.forward(c.center)),
                              (h = (
                                c.projection.options.rotation || [0, 0]
                              ).slice())),
                            "Orthographic" === c.projection.options.name &&
                            3 > (c.minZoom || 1 / 0)
                              ? ((s =
                                  440 /
                                  (c.getScale() *
                                    Math.min(o.plotWidth, o.plotHeight))),
                                h &&
                                  ((i = (i - e) * s - h[0]),
                                  (n = r(-h[1] - (n - a) * s, -80, 80)),
                                  c.update(
                                    {
                                      projection: { rotation: [-i, -n] },
                                      center: [i, n],
                                      zoom: c.zoom,
                                    },
                                    !0,
                                    !1
                                  )))
                              : ((s = c.getScale()),
                                (n = c.projection.inverse([
                                  l[0] + (i - e) / s,
                                  l[1] - (n - a) / s,
                                ])),
                                c.setView(n, void 0, !0, !1)),
                            t.preventDefault();
                        }
                      })
                    ),
                    i(o, "touchpan", n),
                    i(o, "selection", function (t) {
                      if (t.resetSelection) c.zoomBy();
                      else {
                        var e = t.x - o.plotLeft,
                          i = t.y - o.plotTop,
                          r = c.pixelsToProjectedUnits({ x: e, y: i }),
                          n = r.y;
                        (r = r.x),
                          (e = c.pixelsToProjectedUnits({
                            x: e + t.width,
                            y: i + t.height,
                          })),
                          c.fitToBounds(
                            { x1: r, y1: n, x2: e.x, y2: e.y },
                            void 0,
                            !0,
                            !t.originalEvent.touches && void 0
                          ),
                          /^touch/.test(t.originalEvent.type) ||
                            o.showResetZoom(),
                          t.preventDefault();
                      }
                    });
                }
                return (
                  (o.prototype.fitToBounds = function (t, e, o, i) {
                    void 0 === o && (o = !0);
                    var r = t || this.getProjectedBounds();
                    if (r) {
                      var n = this.chart,
                        s = n.plotWidth;
                      n = n.plotHeight;
                      var a = l(e, t ? 0 : this.options.padding);
                      (e = p(a, s)),
                        (a = p(a, n)),
                        (s =
                          Math.log(
                            400.979322 /
                              Math.max(
                                (r.x2 - r.x1) / ((s - e) / 256),
                                (r.y2 - r.y1) / ((n - a) / 256)
                              )
                          ) / Math.log(2)),
                        t || (this.minZoom = s),
                        (t = this.projection.inverse([
                          (r.x2 + r.x1) / 2,
                          (r.y2 + r.y1) / 2,
                        ])),
                        this.setView(t, s, o, i);
                    }
                  }),
                  (o.prototype.getProjectedBounds = function () {
                    var t = this.chart.series.reduce(function (t, e) {
                      return (
                        (e = e.getProjectedBounds && e.getProjectedBounds()) &&
                          t.push(e),
                        t
                      );
                    }, []);
                    return o.compositeBounds(t);
                  }),
                  (o.prototype.getScale = function () {
                    return (256 / 400.979322) * Math.pow(2, this.zoom);
                  }),
                  (o.prototype.redraw = function (t) {
                    this.chart.series.forEach(function (t) {
                      t.useMapGeometry && (t.isDirty = !0);
                    }),
                      this.chart.redraw(t);
                  }),
                  (o.prototype.setView = function (t, e, o, i) {
                    void 0 === o && (o = !0);
                    var r = !1;
                    t && (this.center = t),
                      "number" === typeof e &&
                        ("number" === typeof this.minZoom &&
                          (e = Math.max(e, this.minZoom)),
                        "number" === typeof this.options.maxZoom &&
                          (e = Math.min(e, this.options.maxZoom)),
                        (r = e > this.zoom),
                        (this.zoom = e));
                    var s = this.getProjectedBounds();
                    if (s && !r) {
                      (r = this.projection.forward(this.center)),
                        (t = (e = this.chart).plotWidth),
                        (e = e.plotHeight);
                      var a = this.getScale(),
                        l = this.projectedUnitsToPixels({ x: s.x1, y: s.y1 }),
                        p = this.projectedUnitsToPixels({ x: s.x2, y: s.y2 });
                      s = [(s.x1 + s.x2) / 2, (s.y1 + s.y2) / 2];
                      var h = l.x,
                        c = p.y;
                      (p = p.x),
                        (l = l.y),
                        p - h < t
                          ? (r[0] = s[0])
                          : 0 > h && p < t
                          ? (r[0] += Math.max(h, p - t) / a)
                          : p > t && 0 < h && (r[0] += Math.min(p - t, h) / a),
                        l - c < e
                          ? (r[1] = s[1])
                          : 0 > c && l < e
                          ? (r[1] -= Math.max(c, l - e) / a)
                          : l > e && 0 < c && (r[1] -= Math.min(l - e, c) / a),
                        (this.center = this.projection.inverse(r));
                    }
                    n(this, "afterSetView"), o && this.redraw(i);
                  }),
                  (o.prototype.projectedUnitsToPixels = function (t) {
                    var e = this.getScale(),
                      o = this.projection.forward(this.center);
                    return {
                      x: this.chart.plotWidth / 2 - e * (o[0] - t.x),
                      y: this.chart.plotHeight / 2 + e * (o[1] - t.y),
                    };
                  }),
                  (o.prototype.pixelsToProjectedUnits = function (t) {
                    var e = t.x;
                    t = t.y;
                    var o = this.getScale(),
                      i = this.projection.forward(this.center);
                    return {
                      x: i[0] + (e - this.chart.plotWidth / 2) / o,
                      y: i[1] - (t - this.chart.plotHeight / 2) / o,
                    };
                  }),
                  (o.prototype.update = function (t, o, i) {
                    void 0 === o && (o = !0);
                    var r = t.projection;
                    (r =
                      r &&
                      e.toString(r) !== e.toString(this.options.projection)),
                      a(!0, this.userOptions, t),
                      a(!0, this.options, t),
                      r &&
                        (this.chart.series.forEach(function (t) {
                          t.clearBounds && t.clearBounds(),
                            (t.isDirty = !0),
                            (t.isDirtyData = !0);
                        }),
                        (this.projection = new e(this.options.projection)),
                        t.center ||
                          s(t.zoom) ||
                          this.fitToBounds(void 0, void 0, !1)),
                      (t.center || s(t.zoom)) &&
                        this.setView(this.options.center, t.zoom, !1),
                      o && this.chart.redraw(i);
                  }),
                  (o.prototype.zoomBy = function (t, e, o, i) {
                    var r = this.chart,
                      n = this.projection.forward(this.center),
                      s = (e = e ? this.projection.forward(e) : [])[0],
                      a = e[1];
                    "number" === typeof t
                      ? ((t = this.zoom + t),
                        (e = void 0),
                        o &&
                          ((s = o[0]),
                          (a = o[1]),
                          (o = this.getScale()),
                          (s = s - r.plotLeft - r.plotWidth / 2),
                          (r = a - r.plotTop - r.plotHeight / 2),
                          (s = n[0] + s / o),
                          (a = n[1] + r / o)),
                        "number" === typeof s &&
                          "number" === typeof a &&
                          ((o = 1 - Math.pow(2, this.zoom) / Math.pow(2, t)),
                          (s = n[0] - s),
                          (r = n[1] - a),
                          (n[0] -= s * o),
                          (n[1] += r * o),
                          (e = this.projection.inverse(n))),
                        this.setView(e, t, void 0, i))
                      : this.fitToBounds(void 0, void 0, void 0, i);
                  }),
                  (o.compositeBounds = function (t) {
                    if (t.length)
                      return t.slice(1).reduce(function (t, e) {
                        return (
                          (t.x1 = Math.min(t.x1, e.x1)),
                          (t.y1 = Math.min(t.y1, e.y1)),
                          (t.x2 = Math.max(t.x2, e.x2)),
                          (t.y2 = Math.max(t.y2, e.y2)),
                          t
                        );
                      }, a(t[0]));
                  }),
                  o
                );
              })();
            }
          ),
          e(
            t,
            "Maps/MapSymbols.js",
            [t["Core/Renderer/SVG/SVGRenderer.js"]],
            function (t) {
              function e(t, e, o, i, r, n, s, a) {
                return [
                  ["M", t + r, e],
                  ["L", t + o - n, e],
                  ["C", t + o - n / 2, e, t + o, e + n / 2, t + o, e + n],
                  ["L", t + o, e + i - s],
                  [
                    "C",
                    t + o,
                    e + i - s / 2,
                    t + o - s / 2,
                    e + i,
                    t + o - s,
                    e + i,
                  ],
                  ["L", t + a, e + i],
                  ["C", t + a / 2, e + i, t, e + i - a / 2, t, e + i - a],
                  ["L", t, e + r],
                  ["C", t, e + r / 2, t + r / 2, e, t + r, e],
                  ["Z"],
                ];
              }
              return (
                ((t = t.prototype.symbols).bottombutton = function (
                  t,
                  o,
                  i,
                  r,
                  n
                ) {
                  return e(t - 1, o - 1, i, r, 0, 0, (n = (n && n.r) || 0), n);
                }),
                (t.topbutton = function (t, o, i, r, n) {
                  return e(t - 1, o - 1, i, r, (n = (n && n.r) || 0), n, 0, 0);
                }),
                t
              );
            }
          ),
          e(
            t,
            "Core/Chart/MapChart.js",
            [
              t["Core/Chart/Chart.js"],
              t["Core/DefaultOptions.js"],
              t["Maps/MapView.js"],
              t["Core/Renderer/SVG/SVGRenderer.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i, r) {
              var n =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                s = e.getOptions,
                a = r.addEvent,
                l = r.merge,
                p = r.pick;
              return (
                (function (t) {
                  (t.maps = {}),
                    (t.mapChart = function (e, o, i) {
                      return new t(e, o, i);
                    }),
                    (t.splitPath = function (t) {
                      return (
                        "string" === typeof t &&
                          (t = (t = t
                            .replace(/([A-Za-z])/g, " $1 ")
                            .replace(/^\s*/, "")
                            .replace(/\s*$/, ""))
                            .split(/[ ,;]+/)
                            .map(function (t) {
                              return /[A-za-z]/.test(t) ? t : parseFloat(t);
                            })),
                        i.prototype.pathToSegments(t)
                      );
                    });
                })(
                  (t = (function (t) {
                    function e() {
                      return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                      n(e, t),
                      (e.prototype.init = function (e, i) {
                        a(this, "afterInit", function () {
                          this.mapView = new o(this, this.options.mapView);
                        });
                        var r = s().credits;
                        (e = l(
                          {
                            chart: {
                              panning: { enabled: !0, type: "xy" },
                              type: "map",
                            },
                            credits: {
                              mapText: p(
                                r.mapText,
                                ' \xa9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'
                              ),
                              mapTextFull: p(
                                r.mapTextFull,
                                "{geojson.copyright}"
                              ),
                            },
                            mapView: {},
                            tooltip: { followTouchMove: !1 },
                          },
                          e
                        )),
                          t.prototype.init.call(this, e, i);
                      }),
                      e
                    );
                  })(t)) || (t = {})
                ),
                t
              );
            }
          ),
          e(
            t,
            "Series/Map/MapPoint.js",
            [
              t["Series/ColorMapMixin.js"],
              t["Core/Series/SeriesRegistry.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o) {
              var i =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                r = o.extend;
              return (
                (e = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                      (e.options = void 0),
                      (e.path = void 0),
                      (e.series = void 0),
                      e
                    );
                  }
                  return (
                    i(e, t),
                    (e.getProjectedPath = function (t, e) {
                      return (
                        t.projectedPath ||
                          (e && t.geometry
                            ? ((e.hasCoordinates = !0),
                              (t.projectedPath = e.path(t.geometry)))
                            : (t.projectedPath = t.path)),
                        t.projectedPath || []
                      );
                    }),
                    (e.prototype.applyOptions = function (e, o) {
                      var i = this.series;
                      return (
                        (e = t.prototype.applyOptions.call(this, e, o)),
                        (o = i.joinBy),
                        i.mapData &&
                          i.mapMap &&
                          ((i =
                            "undefined" !==
                              typeof (o = t.prototype.getNestedProperty.call(
                                e,
                                o[1]
                              )) && i.mapMap[o])
                            ? r(e, i)
                            : (e.value = e.value || null)),
                        e
                      );
                    }),
                    (e.prototype.onMouseOver = function (e) {
                      o.clearTimeout(this.colorInterval),
                        null !== this.value ||
                        this.series.options.nullInteraction
                          ? t.prototype.onMouseOver.call(this, e)
                          : this.series.onMouseOut(e);
                    }),
                    (e.prototype.zoomTo = function () {
                      var t = this.series.chart;
                      t.mapView &&
                        this.bounds &&
                        (t.mapView.fitToBounds(this.bounds, void 0, !1),
                        (this.series.isDirty = !0),
                        t.redraw());
                    }),
                    e
                  );
                })(e.seriesTypes.scatter.prototype.pointClass)),
                r(e.prototype, {
                  dataLabelOnNull: t.PointMixin.dataLabelOnNull,
                  isValid: t.PointMixin.isValid,
                  moveToTopOnHover: t.PointMixin.moveToTopOnHover,
                }),
                e
              );
            }
          ),
          e(
            t,
            "Series/Map/MapSeries.js",
            [
              t["Core/Animation/AnimationUtilities.js"],
              t["Series/ColorMapMixin.js"],
              t["Series/CenteredUtilities.js"],
              t["Core/Globals.js"],
              t["Core/Legend/LegendSymbol.js"],
              t["Core/Chart/MapChart.js"],
              t["Series/Map/MapPoint.js"],
              t["Maps/MapView.js"],
              t["Core/Series/Series.js"],
              t["Core/Series/SeriesRegistry.js"],
              t["Core/Renderer/SVG/SVGRenderer.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i, r, n, s, a, l, p, h, c) {
              var u =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                d = t.animObject;
              t = i.noop;
              var f = n.maps,
                y = n.splitPath,
                m = (n = p.seriesTypes).column,
                g = n.scatter;
              n = c.extend;
              var b = c.fireEvent,
                v = c.getNestedProperty,
                x = c.isArray,
                M = c.isNumber,
                C = c.merge,
                j = c.objectEach,
                w = c.pick,
                S = c.splat;
              return (
                (c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                      (e.chart = void 0),
                      (e.data = void 0),
                      (e.group = void 0),
                      (e.joinBy = void 0),
                      (e.options = void 0),
                      (e.points = void 0),
                      (e.transformGroup = void 0),
                      e
                    );
                  }
                  return (
                    u(e, t),
                    (e.prototype.animate = function (t) {
                      var e = this.chart,
                        o = this.group,
                        i = d(this.options.animation);
                      e.renderer.isSVG &&
                        (t
                          ? o.attr({
                              translateX: e.plotLeft + e.plotWidth / 2,
                              translateY: e.plotTop + e.plotHeight / 2,
                              scaleX: 0.001,
                              scaleY: 0.001,
                            })
                          : o.animate(
                              {
                                translateX: e.plotLeft,
                                translateY: e.plotTop,
                                scaleX: 1,
                                scaleY: 1,
                              },
                              i
                            ));
                    }),
                    (e.prototype.animateDrilldown = function (t) {
                      var e = this.chart,
                        o = this.group;
                      e.renderer.isSVG &&
                        (t
                          ? o.attr({
                              translateX: e.plotLeft + e.plotWidth / 2,
                              translateY: e.plotTop + e.plotHeight / 2,
                              scaleX: 0.1,
                              scaleY: 0.1,
                              opacity: 0.01,
                            })
                          : o.animate({
                              translateX: e.plotLeft,
                              translateY: e.plotTop,
                              scaleX: 1,
                              scaleY: 1,
                              opacity: 1,
                            }));
                    }),
                    (e.prototype.animateDrillupFrom = function () {
                      var t = this.chart;
                      t.renderer.isSVG &&
                        this.group.animate({
                          translateX: t.plotLeft + t.plotWidth / 2,
                          translateY: t.plotTop + t.plotHeight / 2,
                          scaleX: 0.1,
                          scaleY: 0.1,
                          opacity: 0.01,
                        });
                    }),
                    (e.prototype.animateDrillupTo = function (t) {
                      m.prototype.animateDrillupTo.call(this, t);
                    }),
                    (e.prototype.clearBounds = function () {
                      this.points.forEach(function (t) {
                        delete t.bounds, delete t.projectedPath;
                      }),
                        delete this.bounds;
                    }),
                    (e.prototype.doFullTranslate = function () {
                      return !(
                        !(
                          this.isDirtyData ||
                          this.chart.isResizing ||
                          this.chart.renderer.isVML
                        ) && this.hasRendered
                      );
                    }),
                    (e.prototype.drawMapDataLabels = function () {
                      l.prototype.drawDataLabels.call(this),
                        this.dataLabelsGroup &&
                          this.dataLabelsGroup.clip(this.chart.clipRect);
                    }),
                    (e.prototype.drawPoints = function () {
                      var t = this,
                        e = this.chart,
                        o = this.group,
                        i = this.svgTransform,
                        r = e.mapView,
                        n = e.renderer;
                      if (
                        (this.transformGroup ||
                          ((this.transformGroup = n.g().add(o)),
                          (this.transformGroup.survive = !0)),
                        this.doFullTranslate() &&
                          (e.hasRendered &&
                            !e.styledMode &&
                            this.points.forEach(function (e) {
                              e.shapeArgs &&
                                (e.shapeArgs.fill = t.pointAttribs(
                                  e,
                                  e.state
                                ).fill);
                            }),
                          (this.group = this.transformGroup),
                          m.prototype.drawPoints.apply(this),
                          (this.group = o),
                          this.points.forEach(function (o) {
                            if (o.graphic) {
                              var i = "";
                              o.name &&
                                (i +=
                                  "highcharts-name-" +
                                  o.name.replace(/ /g, "-").toLowerCase()),
                                o.properties &&
                                  o.properties["hc-key"] &&
                                  (i +=
                                    " highcharts-key-" +
                                    o.properties["hc-key"].toLowerCase()),
                                i && o.graphic.addClass(i),
                                e.styledMode &&
                                  o.graphic.css(
                                    t.pointAttribs(
                                      o,
                                      o.selected ? "select" : void 0
                                    )
                                  );
                            }
                          })),
                        r && i)
                      ) {
                        var s = w(
                            this.options[
                              (this.pointAttrToOptions &&
                                this.pointAttrToOptions["stroke-width"]) ||
                                "borderWidth"
                            ],
                            1
                          ),
                          a = i.scaleX,
                          l = 0 < i.scaleY ? 1 : -1,
                          p = this.transformGroup;
                        if (n.globalAnimation && e.hasRendered) {
                          var h = Number(p.attr("translateX")),
                            c = Number(p.attr("translateY")),
                            u = Number(p.attr("scaleX"));
                          p.attr({ animator: 0 }).animate(
                            { animator: 1 },
                            {
                              step: function (t, e) {
                                (t = u + (a - u) * e.pos),
                                  p.attr({
                                    translateX: h + (i.translateX - h) * e.pos,
                                    translateY: c + (i.translateY - c) * e.pos,
                                    scaleX: t,
                                    scaleY: t * l,
                                  }),
                                  o.element.setAttribute("stroke-width", s / t);
                              },
                            }
                          );
                        } else
                          p.attr(i),
                            o.element.setAttribute("stroke-width", s / a);
                      }
                      this.drawMapDataLabels();
                    }),
                    (e.prototype.getProjectedBounds = function () {
                      if (!this.bounds) {
                        var t = Number.MAX_VALUE,
                          e =
                            this.chart.mapView && this.chart.mapView.projection,
                          o = [];
                        (this.points || []).forEach(function (i) {
                          if (i.path || i.geometry) {
                            if (
                              ("string" === typeof i.path
                                ? (i.path = y(i.path))
                                : x(i.path) &&
                                  "M" === i.path[0] &&
                                  (i.path = h.prototype.pathToSegments(i.path)),
                              !i.bounds)
                            ) {
                              var r,
                                n = s.getProjectedPath(i, e),
                                a = i.properties,
                                l = -t,
                                p = t,
                                c = -t,
                                u = t;
                              n.forEach(function (t) {
                                var e = t[t.length - 2];
                                (t = t[t.length - 1]),
                                  "number" === typeof e &&
                                    "number" === typeof t &&
                                    ((p = Math.min(p, e)),
                                    (l = Math.max(l, e)),
                                    (u = Math.min(u, t)),
                                    (c = Math.max(c, t)),
                                    (r = !0));
                              }),
                                r &&
                                  ((n = a && a["hc-middle-x"]),
                                  (n =
                                    p + (l - p) * w(i.middleX, M(n) ? n : 0.5)),
                                  (a = a && a["hc-middle-y"]),
                                  (a = w(i.middleY, M(a) ? a : 0.5)),
                                  i.geometry || (a = 1 - a),
                                  (i.bounds = {
                                    midX: n,
                                    midY: c - (c - u) * a,
                                    x1: p,
                                    y1: u,
                                    x2: l,
                                    y2: c,
                                  }),
                                  (i.labelrank = w(
                                    i.labelrank,
                                    (l - p) * (c - u)
                                  )));
                            }
                            i.bounds && o.push(i.bounds);
                          }
                        }),
                          (this.bounds = a.compositeBounds(o));
                      }
                      return this.bounds;
                    }),
                    (e.prototype.hasData = function () {
                      return !!this.processedXData.length;
                    }),
                    (e.prototype.pointAttribs = function (t, e) {
                      var o = t.series.chart,
                        i = o.mapView;
                      return (
                        (e = o.styledMode
                          ? this.colorAttribs(t)
                          : m.prototype.pointAttribs.call(this, t, e)),
                        (t =
                          t.options[
                            (this.pointAttrToOptions &&
                              this.pointAttrToOptions["stroke-width"]) ||
                              "borderWidth"
                          ]) &&
                          i &&
                          (t /= i.getScale()),
                        e.dashstyle &&
                          i &&
                          this.options.borderWidth &&
                          (t = this.options.borderWidth / i.getScale()),
                        (e["stroke-width"] = w(t, "inherit")),
                        e
                      );
                    }),
                    (e.prototype.setData = function (t, e, o, r) {
                      var n = this.options,
                        a = this.chart.options.chart,
                        p = a && a.map,
                        h = n.mapData,
                        c = this.joinBy,
                        u = n.keys || this.pointArrayMap,
                        d = [],
                        y = {},
                        m = this.chart.mapTransforms;
                      if (
                        (!h && p && (h = "string" === typeof p ? f[p] : p),
                        t &&
                          t.forEach(function (e, o) {
                            var i = 0;
                            if (M(e)) t[o] = { value: e };
                            else if (x(e)) {
                              (t[o] = {}),
                                !n.keys &&
                                  e.length > u.length &&
                                  "string" === typeof e[0] &&
                                  ((t[o]["hc-key"] = e[0]), ++i);
                              for (var r = 0; r < u.length; ++r, ++i)
                                u[r] &&
                                  "undefined" !== typeof e[i] &&
                                  (0 < u[r].indexOf(".")
                                    ? s.prototype.setNestedProperty(
                                        t[o],
                                        e[i],
                                        u[r]
                                      )
                                    : (t[o][u[r]] = e[i]));
                            }
                            c && "_i" === c[0] && (t[o]._i = o);
                          }),
                        (this.chart.mapTransforms = m =
                          a.mapTransforms || (h && h["hc-transform"]) || m) &&
                          j(m, function (t) {
                            t.rotation &&
                              ((t.cosAngle = Math.cos(t.rotation)),
                              (t.sinAngle = Math.sin(t.rotation)));
                          }),
                        h)
                      ) {
                        for (
                          "FeatureCollection" === h.type &&
                            ((this.mapTitle = h.title),
                            (h = i.geojson(h, this.type, this))),
                            this.mapData = h,
                            this.mapMap = {},
                            m = 0;
                          m < h.length;
                          m++
                        )
                          (p = (a = h[m]).properties),
                            (a._i = m),
                            c[0] && p && p[c[0]] && (a[c[0]] = p[c[0]]),
                            (y[a[c[0]]] = a);
                        if (((this.mapMap = y), t && c[1])) {
                          var g = c[1];
                          t.forEach(function (t) {
                            (t = v(g, t)), y[t] && d.push(y[t]);
                          });
                        }
                        if (n.allAreas) {
                          if (((t = t || []), c[1])) {
                            var b = c[1];
                            t.forEach(function (t) {
                              d.push(v(b, t));
                            });
                          }
                          (d =
                            "|" +
                            d
                              .map(function (t) {
                                return t && t[c[0]];
                              })
                              .join("|") +
                            "|"),
                            h.forEach(function (e) {
                              (c[0] && -1 !== d.indexOf("|" + e[c[0]] + "|")) ||
                                (t.push(C(e, { value: null })), (r = !1));
                            });
                        }
                      }
                      l.prototype.setData.call(this, t, e, o, r),
                        this.processData(),
                        this.generatePoints();
                    }),
                    (e.prototype.setOptions = function (t) {
                      var e = (t = l.prototype.setOptions.call(this, t)).joinBy;
                      return (
                        null === e && (e = "_i"),
                        (e = this.joinBy = S(e))[1] || (e[1] = e[0]),
                        t
                      );
                    }),
                    (e.prototype.translate = function () {
                      var t,
                        e = this.doFullTranslate(),
                        o = this.chart.mapView,
                        i = o && o.projection;
                      if (
                        (!this.chart.hasRendered ||
                          (!this.isDirtyData && this.hasRendered) ||
                          (this.processData(),
                          this.generatePoints(),
                          delete this.bounds,
                          this.getProjectedBounds()),
                        o)
                      ) {
                        var r = o.getScale(),
                          n = o.projection.forward(o.center);
                        (o = o.projection.hasCoordinates ? -1 : 1),
                          (this.svgTransform = t = {
                            scaleX: r,
                            scaleY: r * o,
                            translateX: this.chart.plotWidth / 2 - n[0] * r,
                            translateY:
                              this.chart.plotHeight / 2 - n[1] * r * o,
                          });
                      }
                      this.points.forEach(function (o) {
                        t &&
                          o.bounds &&
                          M(o.bounds.midX) &&
                          M(o.bounds.midY) &&
                          ((o.plotX = o.bounds.midX * t.scaleX + t.translateX),
                          (o.plotY = o.bounds.midY * t.scaleY + t.translateY)),
                          e &&
                            ((o.shapeType = "path"),
                            (o.shapeArgs = { d: s.getProjectedPath(o, i) }));
                      }),
                        b(this, "afterTranslate");
                    }),
                    (e.defaultOptions = C(g.defaultOptions, {
                      animation: !1,
                      dataLabels: {
                        crop: !1,
                        formatter: function () {
                          var t = this.series.chart.numberFormatter,
                            e = this.point.value;
                          return M(e) ? t(e, -1) : "";
                        },
                        inside: !0,
                        overflow: !1,
                        padding: 0,
                        verticalAlign: "middle",
                      },
                      marker: null,
                      nullColor: "#f7f7f7",
                      stickyTracking: !1,
                      tooltip: {
                        followPointer: !0,
                        pointFormat: "{point.name}: {point.value}<br/>",
                      },
                      turboThreshold: 0,
                      allAreas: !0,
                      borderColor: "#cccccc",
                      borderWidth: 1,
                      joinBy: "hc-key",
                      states: {
                        hover: { halo: null, brightness: 0.2 },
                        normal: { animation: !0 },
                        select: { color: "#cccccc" },
                        inactive: { opacity: 1 },
                      },
                    })),
                    e
                  );
                })(g)),
                n(c.prototype, {
                  type: "map",
                  axisTypes: e.SeriesMixin.axisTypes,
                  colorAttribs: e.SeriesMixin.colorAttribs,
                  colorKey: e.SeriesMixin.colorKey,
                  directTouch: !0,
                  drawDataLabels: t,
                  drawGraph: t,
                  drawLegendSymbol: r.drawRectangle,
                  forceDL: !0,
                  getCenter: o.getCenter,
                  getExtremesFromAll: !0,
                  getSymbol: e.SeriesMixin.getSymbol,
                  isCartesian: !1,
                  parallelArrays: e.SeriesMixin.parallelArrays,
                  pointArrayMap: e.SeriesMixin.pointArrayMap,
                  pointClass: s,
                  preserveAspectRatio: !0,
                  searchPoint: t,
                  trackerGroups: e.SeriesMixin.trackerGroups,
                  useMapGeometry: !0,
                }),
                p.registerSeriesType("map", c),
                c
              );
            }
          ),
          e(
            t,
            "Series/MapLine/MapLineSeries.js",
            [
              t["Series/Map/MapSeries.js"],
              t["Core/Series/SeriesRegistry.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o) {
              var i =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                r = e.series,
                n = o.extend,
                s = o.merge;
              return (
                n(
                  (o = (function (e) {
                    function o() {
                      var t = (null !== e && e.apply(this, arguments)) || this;
                      return (
                        (t.data = void 0),
                        (t.options = void 0),
                        (t.points = void 0),
                        t
                      );
                    }
                    return (
                      i(o, e),
                      (o.prototype.pointAttribs = function (e, o) {
                        return (
                          ((e = t.prototype.pointAttribs.call(
                            this,
                            e,
                            o
                          )).fill = this.options.fillColor),
                          e
                        );
                      }),
                      (o.defaultOptions = s(t.defaultOptions, {
                        lineWidth: 1,
                        fillColor: "none",
                      })),
                      o
                    );
                  })(t)).prototype,
                  {
                    type: "mapline",
                    colorProp: "stroke",
                    drawLegendSymbol: r.prototype.drawLegendSymbol,
                    pointAttrToOptions: {
                      stroke: "color",
                      "stroke-width": "lineWidth",
                    },
                  }
                ),
                e.registerSeriesType("mapline", o),
                o
              );
            }
          ),
          e(
            t,
            "Series/MapPoint/MapPointPoint.js",
            [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]],
            function (t, e) {
              var o =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                i = e.isNumber,
                r = e.merge;
              return (function (t) {
                function e() {
                  var e = (null !== t && t.apply(this, arguments)) || this;
                  return (e.options = void 0), (e.series = void 0), e;
                }
                return (
                  o(e, t),
                  (e.prototype.applyOptions = function (e, o) {
                    return (
                      (e =
                        "undefined" !== typeof e.lat &&
                        "undefined" !== typeof e.lon
                          ? r(e, this.series.chart.fromLatLonToPoint(e))
                          : e),
                      t.prototype.applyOptions.call(this, e, o)
                    );
                  }),
                  (e.prototype.isValid = function () {
                    return !!(
                      this.options.geometry ||
                      (i(this.x) && i(this.y))
                    );
                  }),
                  e
                );
              })(t.seriesTypes.scatter.prototype.pointClass);
            }
          ),
          e(
            t,
            "Series/MapPoint/MapPointSeries.js",
            [
              t["Core/Globals.js"],
              t["Series/MapPoint/MapPointPoint.js"],
              t["Core/Series/SeriesRegistry.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i) {
              var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, o) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                      })(e, o);
                  };
                  return function (e, o) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, o),
                      (e.prototype =
                        null === o
                          ? Object.create(o)
                          : ((i.prototype = o.prototype), new i()));
                  };
                })();
              t = t.noop;
              var n = o.seriesTypes.scatter,
                s = i.extend,
                a = i.fireEvent,
                l = i.isNumber,
                p = i.merge;
              return (
                s(
                  (i = (function (t) {
                    function e() {
                      var e = (null !== t && t.apply(this, arguments)) || this;
                      return (
                        (e.data = void 0),
                        (e.options = void 0),
                        (e.points = void 0),
                        e
                      );
                    }
                    return (
                      r(e, t),
                      (e.prototype.drawDataLabels = function () {
                        t.prototype.drawDataLabels.call(this),
                          this.dataLabelsGroup &&
                            this.dataLabelsGroup.clip(this.chart.clipRect);
                      }),
                      (e.prototype.translate = function () {
                        var t = this,
                          e = this.chart.mapView;
                        if (
                          (this.processedXData || this.processData(),
                          this.generatePoints(),
                          e)
                        ) {
                          var o = e.projection,
                            i = o.forward,
                            r = o.hasCoordinates;
                          this.points.forEach(function (o) {
                            var n = o.x;
                            n = void 0 === n ? void 0 : n;
                            var s = o.y;
                            s = void 0 === s ? void 0 : s;
                            var a = o.options.geometry;
                            (a = a && "Point" === a.type && a.coordinates)
                              ? ((n = (s = i(a))[0]), (s = s[1]))
                              : o.bounds &&
                                ((n = o.bounds.midX), (s = o.bounds.midY)),
                              l(n) && l(s)
                                ? ((n = e.projectedUnitsToPixels({
                                    x: n,
                                    y: s,
                                  })),
                                  (o.plotX = n.x),
                                  (o.plotY = r
                                    ? n.y
                                    : t.chart.plotHeight - n.y))
                                : ((o.plotX = void 0), (o.plotY = void 0)),
                              (o.isInside = t.isPointInside(o)),
                              (o.zone = t.zones.length ? o.getZone() : void 0);
                          });
                        }
                        a(this, "afterTranslate");
                      }),
                      (e.defaultOptions = p(n.defaultOptions, {
                        dataLabels: {
                          crop: !1,
                          defer: !1,
                          enabled: !0,
                          formatter: function () {
                            return this.point.name;
                          },
                          overflow: !1,
                          style: { color: "#000000" },
                        },
                      })),
                      e
                    );
                  })(n)).prototype,
                  {
                    type: "mappoint",
                    axisTypes: ["colorAxis"],
                    forceDL: !0,
                    isCartesian: !1,
                    pointClass: e,
                    searchPoint: t,
                    useMapGeometry: !0,
                  }
                ),
                o.registerSeriesType("mappoint", i),
                i
              );
            }
          ),
          e(t, "Series/Bubble/BubbleLegendDefaults.js", [], function () {
            return {
              borderColor: void 0,
              borderWidth: 2,
              className: void 0,
              color: void 0,
              connectorClassName: void 0,
              connectorColor: void 0,
              connectorDistance: 60,
              connectorWidth: 1,
              enabled: !1,
              labels: {
                className: void 0,
                allowOverlap: !1,
                format: "",
                formatter: void 0,
                align: "right",
                style: { fontSize: "10px", color: "#000000" },
                x: 0,
                y: 0,
              },
              maxSize: 60,
              minSize: 10,
              legendIndex: 0,
              ranges: {
                value: void 0,
                borderColor: void 0,
                color: void 0,
                connectorColor: void 0,
              },
              sizeBy: "area",
              sizeByAbsoluteValue: !1,
              zIndex: 1,
              zThreshold: 0,
            };
          }),
          e(
            t,
            "Series/Bubble/BubbleLegendItem.js",
            [
              t["Core/Color/Color.js"],
              t["Core/FormatUtilities.js"],
              t["Core/Globals.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i) {
              var r = t.parse,
                n = o.noop,
                s = i.arrayMax,
                a = i.arrayMin,
                l = i.isNumber,
                p = i.merge,
                h = i.pick,
                c = i.stableSort;
              return (function () {
                function t(t, e) {
                  (this.options = this.symbols = this.visible = this.selected = this.ranges = this.movementX = this.maxLabel = this.legendSymbol = this.legendItemWidth = this.legendItemHeight = this.legendItem = this.legendGroup = this.legend = this.fontMetrics = this.chart = void 0),
                    (this.setState = n),
                    this.init(t, e);
                }
                return (
                  (t.prototype.init = function (t, e) {
                    (this.options = t),
                      (this.visible = !0),
                      (this.chart = e.chart),
                      (this.legend = e);
                  }),
                  (t.prototype.addToLegend = function (t) {
                    t.splice(this.options.legendIndex, 0, this);
                  }),
                  (t.prototype.drawLegendSymbol = function (t) {
                    var e = this.chart,
                      o = this.options,
                      i = h(t.options.itemDistance, 20),
                      r = o.ranges,
                      n = o.connectorDistance;
                    (this.fontMetrics = e.renderer.fontMetrics(
                      o.labels.style.fontSize
                    )),
                      r && r.length && l(r[0].value)
                        ? (c(r, function (t, e) {
                            return e.value - t.value;
                          }),
                          (this.ranges = r),
                          this.setOptions(),
                          this.render(),
                          (t = this.getMaxLabelSize()),
                          (e = 2 * (r = this.ranges[0].radius)),
                          (n = 0 < (n = n - r + t.width) ? n : 0),
                          (this.maxLabel = t),
                          (this.movementX = "left" === o.labels.align ? n : 0),
                          (this.legendItemWidth = e + n + i),
                          (this.legendItemHeight = e + this.fontMetrics.h / 2))
                        : (t.options.bubbleLegend.autoRanges = !0);
                  }),
                  (t.prototype.setOptions = function () {
                    var t = this.ranges,
                      e = this.options,
                      o = this.chart.series[e.seriesIndex],
                      i = this.legend.baseline,
                      n = { zIndex: e.zIndex, "stroke-width": e.borderWidth },
                      s = {
                        zIndex: e.zIndex,
                        "stroke-width": e.connectorWidth,
                      },
                      a = {
                        align:
                          this.legend.options.rtl || "left" === e.labels.align
                            ? "right"
                            : "left",
                        zIndex: e.zIndex,
                      },
                      l = o.options.marker.fillOpacity,
                      c = this.chart.styledMode;
                    t.forEach(function (u, d) {
                      c ||
                        ((n.stroke = h(u.borderColor, e.borderColor, o.color)),
                        (n.fill = h(
                          u.color,
                          e.color,
                          1 !== l
                            ? r(o.color).setOpacity(l).get("rgba")
                            : o.color
                        )),
                        (s.stroke = h(
                          u.connectorColor,
                          e.connectorColor,
                          o.color
                        ))),
                        (t[d].radius = this.getRangeRadius(u.value)),
                        (t[d] = p(t[d], {
                          center: t[0].radius - t[d].radius + i,
                        })),
                        c ||
                          p(!0, t[d], {
                            bubbleAttribs: p(n),
                            connectorAttribs: p(s),
                            labelAttribs: a,
                          });
                    }, this);
                  }),
                  (t.prototype.getRangeRadius = function (t) {
                    var e = this.options;
                    return this.chart.series[
                      this.options.seriesIndex
                    ].getRadius.call(
                      this,
                      e.ranges[e.ranges.length - 1].value,
                      e.ranges[0].value,
                      e.minSize,
                      e.maxSize,
                      t
                    );
                  }),
                  (t.prototype.render = function () {
                    var t = this.chart.renderer,
                      e = this.options.zThreshold;
                    this.symbols ||
                      (this.symbols = {
                        connectors: [],
                        bubbleItems: [],
                        labels: [],
                      }),
                      (this.legendSymbol = t.g("bubble-legend")),
                      (this.legendItem = t.g("bubble-legend-item")),
                      (this.legendSymbol.translateX = 0),
                      (this.legendSymbol.translateY = 0),
                      this.ranges.forEach(function (t) {
                        t.value >= e && this.renderRange(t);
                      }, this),
                      this.legendSymbol.add(this.legendItem),
                      this.legendItem.add(this.legendGroup),
                      this.hideOverlappingLabels();
                  }),
                  (t.prototype.renderRange = function (t) {
                    var e = this.options,
                      o = e.labels,
                      i = this.chart,
                      r = i.series[e.seriesIndex],
                      n = i.renderer,
                      s = this.symbols;
                    i = s.labels;
                    var a = t.center,
                      l = Math.abs(t.radius),
                      p = e.connectorDistance || 0,
                      h = o.align,
                      c = e.connectorWidth,
                      u = this.ranges[0].radius || 0,
                      d = a - l - e.borderWidth / 2 + c / 2,
                      f = this.fontMetrics;
                    f = f.f / 2 - (f.h - f.f) / 2;
                    var y = n.styledMode;
                    (p = this.legend.options.rtl || "left" === h ? -p : p),
                      "center" === h &&
                        ((p = 0),
                        (e.connectorDistance = 0),
                        (t.labelAttribs.align = "center")),
                      (h = d + e.labels.y);
                    var m = u + p + e.labels.x;
                    s.bubbleItems.push(
                      n
                        .circle(
                          u,
                          a + ((d % 1 ? 1 : 0.5) - (c % 2 ? 0 : 0.5)),
                          l
                        )
                        .attr(y ? {} : t.bubbleAttribs)
                        .addClass(
                          (y ? "highcharts-color-" + r.colorIndex + " " : "") +
                            "highcharts-bubble-legend-symbol " +
                            (e.className || "")
                        )
                        .add(this.legendSymbol)
                    ),
                      s.connectors.push(
                        n
                          .path(
                            n.crispLine(
                              [
                                ["M", u, d],
                                ["L", u + p, d],
                              ],
                              e.connectorWidth
                            )
                          )
                          .attr(y ? {} : t.connectorAttribs)
                          .addClass(
                            (y
                              ? "highcharts-color-" +
                                this.options.seriesIndex +
                                " "
                              : "") +
                              "highcharts-bubble-legend-connectors " +
                              (e.connectorClassName || "")
                          )
                          .add(this.legendSymbol)
                      ),
                      (t = n
                        .text(this.formatLabel(t), m, h + f)
                        .attr(y ? {} : t.labelAttribs)
                        .css(y ? {} : o.style)
                        .addClass(
                          "highcharts-bubble-legend-labels " +
                            (e.labels.className || "")
                        )
                        .add(this.legendSymbol)),
                      i.push(t),
                      (t.placed = !0),
                      (t.alignAttr = { x: m, y: h + f });
                  }),
                  (t.prototype.getMaxLabelSize = function () {
                    var t, e;
                    return (
                      this.symbols.labels.forEach(function (o) {
                        (e = o.getBBox(!0)),
                          (t = t ? (e.width > t.width ? e : t) : e);
                      }),
                      t || {}
                    );
                  }),
                  (t.prototype.formatLabel = function (t) {
                    var o = this.options,
                      i = o.labels.formatter;
                    o = o.labels.format;
                    var r = this.chart.numberFormatter;
                    return o ? e.format(o, t) : i ? i.call(t) : r(t.value, 1);
                  }),
                  (t.prototype.hideOverlappingLabels = function () {
                    var t = this.chart,
                      e = this.symbols;
                    !this.options.labels.allowOverlap &&
                      e &&
                      (t.hideOverlappingLabels(e.labels),
                      e.labels.forEach(function (t, o) {
                        t.newOpacity
                          ? t.newOpacity !== t.oldOpacity &&
                            e.connectors[o].show()
                          : e.connectors[o].hide();
                      }));
                  }),
                  (t.prototype.getRanges = function () {
                    var t,
                      e = this.legend.bubbleLegend,
                      o = e.options.ranges,
                      i = Number.MAX_VALUE,
                      r = -Number.MAX_VALUE;
                    e.chart.series.forEach(function (e) {
                      e.isBubble &&
                        !e.ignoreSeries &&
                        (t = e.zData.filter(l)).length &&
                        ((i = h(
                          e.options.zMin,
                          Math.min(
                            i,
                            Math.max(
                              a(t),
                              !1 === e.options.displayNegative
                                ? e.options.zThreshold
                                : -Number.MAX_VALUE
                            )
                          )
                        )),
                        (r = h(e.options.zMax, Math.max(r, s(t)))));
                    });
                    var n =
                      i === r
                        ? [{ value: r }]
                        : [
                            { value: i },
                            { value: (i + r) / 2 },
                            { value: r, autoRanges: !0 },
                          ];
                    return (
                      o.length && o[0].radius && n.reverse(),
                      n.forEach(function (t, e) {
                        o && o[e] && (n[e] = p(o[e], t));
                      }),
                      n
                    );
                  }),
                  (t.prototype.predictBubbleSizes = function () {
                    var t = this.chart,
                      e = this.fontMetrics,
                      o = t.legend.options,
                      i = o.floating,
                      r = (o = "horizontal" === o.layout)
                        ? t.legend.lastLineHeight
                        : 0,
                      n = t.plotSizeX,
                      s = t.plotSizeY,
                      a = t.series[this.options.seriesIndex],
                      l = a.getPxExtremes();
                    (t = Math.ceil(l.minPxSize)), (l = Math.ceil(l.maxPxSize));
                    var p = Math.min(s, n);
                    return (
                      (a = a.options.maxSize),
                      i || !/%$/.test(a)
                        ? (e = l)
                        : ((a = parseFloat(a)),
                          (e = ((p + r - e.h / 2) * a) / 100 / (a / 100 + 1)),
                          ((o && s - e >= n) || (!o && n - e >= s)) && (e = l)),
                      [t, Math.ceil(e)]
                    );
                  }),
                  (t.prototype.updateRanges = function (t, e) {
                    var o = this.legend.options.bubbleLegend;
                    (o.minSize = t),
                      (o.maxSize = e),
                      (o.ranges = this.getRanges());
                  }),
                  (t.prototype.correctSizes = function () {
                    var t = this.legend,
                      e = this.chart.series[
                        this.options.seriesIndex
                      ].getPxExtremes();
                    1 <
                      Math.abs(Math.ceil(e.maxPxSize) - this.options.maxSize) &&
                      (this.updateRanges(this.options.minSize, e.maxPxSize),
                      t.render());
                  }),
                  t
                );
              })();
            }
          ),
          e(
            t,
            "Series/Bubble/BubbleLegendComposition.js",
            [
              t["Series/Bubble/BubbleLegendDefaults.js"],
              t["Series/Bubble/BubbleLegendItem.js"],
              t["Core/DefaultOptions.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i) {
              var r,
                n = o.setOptions,
                s = i.addEvent,
                a = i.objectEach,
                l = i.wrap;
              return (
                (function (o) {
                  function i(t, e, o) {
                    var i = this.legend,
                      n = 0 <= r(this);
                    if (
                      i &&
                      i.options.enabled &&
                      i.bubbleLegend &&
                      i.options.bubbleLegend.autoRanges &&
                      n
                    ) {
                      var s = i.bubbleLegend.options;
                      (n = i.bubbleLegend.predictBubbleSizes()),
                        i.bubbleLegend.updateRanges(n[0], n[1]),
                        s.placed ||
                          ((i.group.placed = !1),
                          i.allItems.forEach(function (t) {
                            t.legendGroup.translateY = null;
                          })),
                        i.render(),
                        this.getMargins(),
                        this.axes.forEach(function (t) {
                          t.visible && t.render(),
                            s.placed ||
                              (t.setScale(),
                              t.updateNames(),
                              a(t.ticks, function (t) {
                                (t.isNew = !0), (t.isNewLabel = !0);
                              }));
                        }),
                        (s.placed = !0),
                        this.getMargins(),
                        t.call(this, e, o),
                        i.bubbleLegend.correctSizes(),
                        u(i, p(i));
                    } else
                      t.call(this, e, o),
                        i &&
                          i.options.enabled &&
                          i.bubbleLegend &&
                          (i.render(), u(i, p(i)));
                  }
                  function r(t) {
                    t = t.series;
                    for (var e = 0; e < t.length; ) {
                      if (
                        t[e] &&
                        t[e].isBubble &&
                        t[e].visible &&
                        t[e].zData.length
                      )
                        return e;
                      e++;
                    }
                    return -1;
                  }
                  function p(t) {
                    var e,
                      o = [],
                      i = (t = t.allItems).length,
                      r = 0;
                    for (e = 0; e < i; e++)
                      if (
                        (t[e].legendItemHeight &&
                          (t[e].itemHeight = t[e].legendItemHeight),
                        t[e] === t[i - 1] ||
                          (t[e + 1] &&
                            t[e]._legendItemPos[1] !==
                              t[e + 1]._legendItemPos[1]))
                      ) {
                        o.push({ height: 0 });
                        for (var n = o[o.length - 1]; r <= e; r++)
                          t[r].itemHeight > n.height &&
                            (n.height = t[r].itemHeight);
                        n.step = e;
                      }
                    return o;
                  }
                  function h(t) {
                    var o = this.bubbleLegend,
                      i = this.options,
                      n = i.bubbleLegend,
                      s = r(this.chart);
                    o &&
                      o.ranges &&
                      o.ranges.length &&
                      (n.ranges.length &&
                        (n.autoRanges = !!n.ranges[0].autoRanges),
                      this.destroyItem(o)),
                      0 <= s &&
                        i.enabled &&
                        n.enabled &&
                        ((n.seriesIndex = s),
                        (this.bubbleLegend = new e(n, this)),
                        this.bubbleLegend.addToLegend(t.allItems));
                  }
                  function c() {
                    var t = this.chart,
                      e = this.visible,
                      o = this.chart.legend;
                    o &&
                      o.bubbleLegend &&
                      ((this.visible = !e),
                      (this.ignoreSeries = e),
                      (t = 0 <= r(t)),
                      o.bubbleLegend.visible !== t &&
                        (o.update({ bubbleLegend: { enabled: t } }),
                        (o.bubbleLegend.visible = t)),
                      (this.visible = e));
                  }
                  function u(t, e) {
                    var o,
                      i,
                      r,
                      n = t.options.rtl,
                      s = 0;
                    t.allItems.forEach(function (t, a) {
                      (o = t.legendGroup.translateX),
                        (i = t._legendItemPos[1]),
                        ((r = t.movementX) || (n && t.ranges)) &&
                          ((r = n ? o - t.options.maxSize / 2 : o + r),
                          t.legendGroup.attr({ translateX: r })),
                        a > e[s].step && s++,
                        t.legendGroup.attr({
                          translateY: Math.round(i + e[s].height / 2),
                        }),
                        (t._legendItemPos[1] = i + e[s].height / 2);
                    });
                  }
                  var d = [];
                  o.compose = function (e, o, r) {
                    -1 === d.indexOf(e) &&
                      (d.push(e),
                      n({ legend: { bubbleLegend: t } }),
                      l(e.prototype, "drawChartBox", i)),
                      -1 === d.indexOf(o) &&
                        (d.push(o), s(o, "afterGetAllItems", h)),
                      -1 === d.indexOf(r) &&
                        (d.push(r), s(r, "legendItemClick", c));
                  };
                })(r || (r = {})),
                r
              );
            }
          ),
          e(
            t,
            "Series/Bubble/BubblePoint.js",
            [
              t["Core/Series/Point.js"],
              t["Core/Series/SeriesRegistry.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o) {
              var i =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, o) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                      })(e, o);
                  };
                  return function (e, o) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, o),
                      (e.prototype =
                        null === o
                          ? Object.create(o)
                          : ((i.prototype = o.prototype), new i()));
                  };
                })();
              return (
                (o = o.extend)(
                  (e = (function (e) {
                    function o() {
                      var t = (null !== e && e.apply(this, arguments)) || this;
                      return (t.options = void 0), (t.series = void 0), t;
                    }
                    return (
                      i(o, e),
                      (o.prototype.haloPath = function (e) {
                        return t.prototype.haloPath.call(
                          this,
                          0 === e
                            ? 0
                            : ((this.marker && this.marker.radius) || 0) + e
                        );
                      }),
                      o
                    );
                  })(e.seriesTypes.scatter.prototype.pointClass)).prototype,
                  { ttBelow: !1 }
                ),
                e
              );
            }
          ),
          e(
            t,
            "Series/Bubble/BubbleSeries.js",
            [
              t["Core/Axis/Axis.js"],
              t["Series/Bubble/BubbleLegendComposition.js"],
              t["Series/Bubble/BubblePoint.js"],
              t["Core/Color/Color.js"],
              t["Core/Globals.js"],
              t["Core/Series/Series.js"],
              t["Core/Series/SeriesRegistry.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i, r, n, s, a) {
              var l =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                p = i.parse;
              i = r.noop;
              var h = s.seriesTypes;
              r = h.column;
              var c = h.scatter;
              h = a.addEvent;
              var u = a.arrayMax,
                d = a.arrayMin,
                f = a.clamp,
                y = a.extend,
                m = a.isNumber,
                g = a.merge,
                b = a.pick;
              return (
                (a = (function (t) {
                  function o() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                      (e.data = void 0),
                      (e.maxPxSize = void 0),
                      (e.minPxSize = void 0),
                      (e.options = void 0),
                      (e.points = void 0),
                      (e.radii = void 0),
                      (e.yData = void 0),
                      (e.zData = void 0),
                      e
                    );
                  }
                  return (
                    l(o, t),
                    (o.prototype.animate = function (t) {
                      !t &&
                        this.points.length < this.options.animationLimit &&
                        this.points.forEach(function (t) {
                          var e = t.graphic;
                          e &&
                            e.width &&
                            (this.hasRendered ||
                              e.attr({
                                x: t.plotX,
                                y: t.plotY,
                                width: 1,
                                height: 1,
                              }),
                            e.animate(
                              this.markerAttribs(t),
                              this.options.animation
                            ));
                        }, this);
                    }),
                    (o.prototype.getRadii = function () {
                      var t = this,
                        e = this.zData,
                        o = this.yData,
                        i = [],
                        r = this.chart.bubbleZExtremes,
                        n = this.getPxExtremes(),
                        s = n.minPxSize,
                        a = n.maxPxSize;
                      if (!r) {
                        var l,
                          p = Number.MAX_VALUE,
                          h = -Number.MAX_VALUE;
                        this.chart.series.forEach(function (e) {
                          e.bubblePadding &&
                            (e.visible ||
                              !t.chart.options.chart.ignoreHiddenSeries) &&
                            (e = e.getZExtremes()) &&
                            ((p = Math.min(p || e.zMin, e.zMin)),
                            (h = Math.max(h || e.zMax, e.zMax)),
                            (l = !0));
                        }),
                          l
                            ? ((r = { zMin: p, zMax: h }),
                              (this.chart.bubbleZExtremes = r))
                            : (r = { zMin: 0, zMax: 0 });
                      }
                      var c = 0;
                      for (n = e.length; c < n; c++) {
                        var u = e[c];
                        i.push(this.getRadius(r.zMin, r.zMax, s, a, u, o[c]));
                      }
                      this.radii = i;
                    }),
                    (o.prototype.getRadius = function (t, e, o, i, r, n) {
                      var s = this.options,
                        a = "width" !== s.sizeBy,
                        l = s.zThreshold,
                        p = e - t,
                        h = 0.5;
                      if (null === n || null === r) return null;
                      if (m(r)) {
                        if (
                          (s.sizeByAbsoluteValue &&
                            ((r = Math.abs(r - l)),
                            (p = Math.max(e - l, Math.abs(t - l))),
                            (t = 0)),
                          r < t)
                        )
                          return o / 2 - 1;
                        0 < p && (h = (r - t) / p);
                      }
                      return (
                        a && 0 <= h && (h = Math.sqrt(h)),
                        Math.ceil(o + h * (i - o)) / 2
                      );
                    }),
                    (o.prototype.hasData = function () {
                      return !!this.processedXData.length;
                    }),
                    (o.prototype.pointAttribs = function (t, e) {
                      var o = this.options.marker.fillOpacity;
                      return (
                        (t = n.prototype.pointAttribs.call(this, t, e)),
                        1 !== o &&
                          (t.fill = p(t.fill).setOpacity(o).get("rgba")),
                        t
                      );
                    }),
                    (o.prototype.translate = function () {
                      t.prototype.translate.call(this),
                        this.getRadii(),
                        this.translateBubble();
                    }),
                    (o.prototype.translateBubble = function () {
                      for (
                        var t = this.data,
                          e = this.radii,
                          o = this.getPxExtremes().minPxSize,
                          i = t.length;
                        i--;

                      ) {
                        var r = t[i],
                          n = e ? e[i] : 0;
                        m(n) && n >= o / 2
                          ? ((r.marker = y(r.marker, {
                              radius: n,
                              width: 2 * n,
                              height: 2 * n,
                            })),
                            (r.dlBox = {
                              x: r.plotX - n,
                              y: r.plotY - n,
                              width: 2 * n,
                              height: 2 * n,
                            }))
                          : (r.shapeArgs = r.plotY = r.dlBox = void 0);
                      }
                    }),
                    (o.prototype.getPxExtremes = function () {
                      var t = Math.min(
                          this.chart.plotWidth,
                          this.chart.plotHeight
                        ),
                        e = function (e) {
                          if ("string" === typeof e) {
                            var o = /%$/.test(e);
                            e = parseInt(e, 10);
                          }
                          return o ? (t * e) / 100 : e;
                        },
                        o = e(b(this.options.minSize, 8));
                      return {
                        minPxSize: o,
                        maxPxSize: (e = Math.max(
                          e(b(this.options.maxSize, "20%")),
                          o
                        )),
                      };
                    }),
                    (o.prototype.getZExtremes = function () {
                      var t = this.options,
                        e = (this.zData || []).filter(m);
                      if (e.length) {
                        var o = b(
                          t.zMin,
                          f(
                            d(e),
                            !1 === t.displayNegative
                              ? t.zThreshold || 0
                              : -Number.MAX_VALUE,
                            Number.MAX_VALUE
                          )
                        );
                        if (((t = b(t.zMax, u(e))), m(o) && m(t)))
                          return { zMin: o, zMax: t };
                      }
                    }),
                    (o.compose = e.compose),
                    (o.defaultOptions = g(c.defaultOptions, {
                      dataLabels: {
                        formatter: function () {
                          var t = this.series.chart.numberFormatter,
                            e = this.point.z;
                          return m(e) ? t(e, -1) : "";
                        },
                        inside: !0,
                        verticalAlign: "middle",
                      },
                      animationLimit: 250,
                      marker: {
                        lineColor: null,
                        lineWidth: 1,
                        fillOpacity: 0.5,
                        radius: null,
                        states: { hover: { radiusPlus: 0 } },
                        symbol: "circle",
                      },
                      minSize: 8,
                      maxSize: "20%",
                      softThreshold: !1,
                      states: { hover: { halo: { size: 5 } } },
                      tooltip: {
                        pointFormat: "({point.x}, {point.y}), Size: {point.z}",
                      },
                      turboThreshold: 0,
                      zThreshold: 0,
                      zoneAxis: "z",
                    })),
                    o
                  );
                })(c)),
                y(a.prototype, {
                  alignDataLabel: r.prototype.alignDataLabel,
                  applyZones: i,
                  bubblePadding: !0,
                  buildKDTree: i,
                  directTouch: !0,
                  isBubble: !0,
                  pointArrayMap: ["y", "z"],
                  pointClass: o,
                  parallelArrays: ["x", "y", "z"],
                  trackerGroups: ["group", "dataLabelsGroup"],
                  specialGroup: "group",
                  zoneAxis: "z",
                }),
                h(a, "updatedData", function (t) {
                  delete t.target.chart.bubbleZExtremes;
                }),
                (t.prototype.beforePadding = function () {
                  var t,
                    e = this,
                    o = this.len,
                    i = this.chart,
                    r = 0,
                    n = o,
                    s = this.isXAxis,
                    a = s ? "xData" : "yData",
                    l = this.min,
                    p = this.max - l,
                    h = o / p;
                  this.series.forEach(function (o) {
                    if (
                      o.bubblePadding &&
                      (o.visible || !i.options.chart.ignoreHiddenSeries)
                    ) {
                      t = e.allowZoomOutside = !0;
                      var c = o[a];
                      if ((s && o.getRadii(0, 0, o), 0 < p))
                        for (var u = c.length; u--; )
                          if (m(c[u]) && e.dataMin <= c[u] && c[u] <= e.max) {
                            var d = (o.radii && o.radii[u]) || 0;
                            (r = Math.min((c[u] - l) * h - d, r)),
                              (n = Math.max((c[u] - l) * h + d, n));
                          }
                    }
                  }),
                    t &&
                      0 < p &&
                      !this.logarithmic &&
                      ((n -= o),
                      (h *= (o + Math.max(0, r) - Math.min(n, o)) / o),
                      [
                        ["min", "userMin", r],
                        ["max", "userMax", n],
                      ].forEach(function (t) {
                        "undefined" === typeof b(e.options[t[0]], e[t[1]]) &&
                          (e[t[0]] += t[2] / h);
                      }));
                }),
                s.registerSeriesType("bubble", a),
                a
              );
            }
          ),
          e(
            t,
            "Series/MapBubble/MapBubblePoint.js",
            [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]],
            function (t, e) {
              var o =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                i = (t = t.seriesTypes).map,
                r = e.merge;
              return (function (t) {
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  o(e, t),
                  (e.prototype.applyOptions = function (e, o) {
                    return e &&
                      "undefined" !== typeof e.lat &&
                      "undefined" !== typeof e.lon
                      ? t.prototype.applyOptions.call(
                          this,
                          r(e, this.series.chart.fromLatLonToPoint(e)),
                          o
                        )
                      : i.prototype.pointClass.prototype.applyOptions.call(
                          this,
                          e,
                          o
                        );
                  }),
                  (e.prototype.isValid = function () {
                    return "number" === typeof this.z;
                  }),
                  e
                );
              })(t.bubble.prototype.pointClass);
            }
          ),
          e(
            t,
            "Series/MapBubble/MapBubbleSeries.js",
            [
              t["Series/Bubble/BubbleSeries.js"],
              t["Series/MapBubble/MapBubblePoint.js"],
              t["Series/Map/MapSeries.js"],
              t["Core/Series/SeriesRegistry.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i, r) {
              var n =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                s = i.seriesTypes.mappoint,
                a = r.extend,
                l = r.merge;
              return (
                (r = (function (e) {
                  function o() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                      (t.data = void 0),
                      (t.options = void 0),
                      (t.points = void 0),
                      t
                    );
                  }
                  return (
                    n(o, e),
                    (o.prototype.translate = function () {
                      s.prototype.translate.call(this),
                        this.getRadii(),
                        this.translateBubble();
                    }),
                    (o.compose = t.compose),
                    (o.defaultOptions = l(t.defaultOptions, {
                      animationLimit: 500,
                      tooltip: { pointFormat: "{point.name}: {point.z}" },
                    })),
                    o
                  );
                })(t)),
                a(r.prototype, {
                  type: "mapbubble",
                  axisTypes: ["colorAxis"],
                  getProjectedBounds: o.prototype.getProjectedBounds,
                  isCartesian: !1,
                  pointArrayMap: ["z"],
                  pointClass: e,
                  setData: o.prototype.setData,
                  setOptions: o.prototype.setOptions,
                  useMapGeometry: !0,
                  xyFromShape: !0,
                }),
                i.registerSeriesType("mapbubble", r),
                r
              );
            }
          ),
          e(
            t,
            "Series/Heatmap/HeatmapPoint.js",
            [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]],
            function (t, e) {
              var o =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                i = e.clamp,
                r = e.defined,
                n = e.extend,
                s = e.pick;
              return (
                n(
                  (t = (function (t) {
                    function e() {
                      var e = (null !== t && t.apply(this, arguments)) || this;
                      return (
                        (e.options = void 0),
                        (e.series = void 0),
                        (e.value = void 0),
                        (e.x = void 0),
                        (e.y = void 0),
                        e
                      );
                    }
                    return (
                      o(e, t),
                      (e.prototype.applyOptions = function (e, o) {
                        return (
                          ((e = t.prototype.applyOptions.call(
                            this,
                            e,
                            o
                          )).formatPrefix =
                            e.isNull || null === e.value ? "null" : "point"),
                          e
                        );
                      }),
                      (e.prototype.getCellAttributes = function () {
                        var t = this.series,
                          e = t.options,
                          o = (e.colsize || 1) / 2,
                          n = (e.rowsize || 1) / 2,
                          a = t.xAxis,
                          l = t.yAxis,
                          p = this.options.marker || t.options.marker;
                        t = t.pointPlacementToXValue();
                        var h = s(this.pointPadding, e.pointPadding, 0),
                          c = {
                            x1: i(
                              Math.round(
                                a.len -
                                  (a.translate(
                                    this.x - o,
                                    !1,
                                    !0,
                                    !1,
                                    !0,
                                    -t
                                  ) || 0)
                              ),
                              -a.len,
                              2 * a.len
                            ),
                            x2: i(
                              Math.round(
                                a.len -
                                  (a.translate(
                                    this.x + o,
                                    !1,
                                    !0,
                                    !1,
                                    !0,
                                    -t
                                  ) || 0)
                              ),
                              -a.len,
                              2 * a.len
                            ),
                            y1: i(
                              Math.round(
                                l.translate(this.y - n, !1, !0, !1, !0) || 0
                              ),
                              -l.len,
                              2 * l.len
                            ),
                            y2: i(
                              Math.round(
                                l.translate(this.y + n, !1, !0, !1, !0) || 0
                              ),
                              -l.len,
                              2 * l.len
                            ),
                          };
                        return (
                          [
                            ["width", "x"],
                            ["height", "y"],
                          ].forEach(function (t) {
                            var e = t[0],
                              o = (t = t[1]) + "1",
                              i = t + "2",
                              n = Math.abs(c[o] - c[i]),
                              s = (p && p.lineWidth) || 0,
                              a = Math.abs(c[o] + c[i]) / 2;
                            (e = p && p[e]),
                              r(e) &&
                                e < n &&
                                ((e = e / 2 + s / 2),
                                (c[o] = a - e),
                                (c[i] = a + e)),
                              h &&
                                ("y" === t && ((o = i), (i = t + "1")),
                                (c[o] += h),
                                (c[i] -= h));
                          }),
                          c
                        );
                      }),
                      (e.prototype.haloPath = function (t) {
                        if (!t) return [];
                        var e = this.shapeArgs;
                        return [
                          "M",
                          e.x - t,
                          e.y - t,
                          "L",
                          e.x - t,
                          e.y + e.height + t,
                          e.x + e.width + t,
                          e.y + e.height + t,
                          e.x + e.width + t,
                          e.y - t,
                          "Z",
                        ];
                      }),
                      (e.prototype.isValid = function () {
                        return 1 / 0 !== this.value && -1 / 0 !== this.value;
                      }),
                      e
                    );
                  })(t.seriesTypes.scatter.prototype.pointClass)).prototype,
                  { dataLabelOnNull: !0, moveToTopOnHover: !0, ttBelow: !1 }
                ),
                t
              );
            }
          ),
          e(
            t,
            "Series/Heatmap/HeatmapSeries.js",
            [
              t["Core/Color/Color.js"],
              t["Series/ColorMapMixin.js"],
              t["Series/Heatmap/HeatmapPoint.js"],
              t["Core/Legend/LegendSymbol.js"],
              t["Core/Series/SeriesRegistry.js"],
              t["Core/Renderer/SVG/SVGRenderer.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i, r, n, s) {
              var a =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, o) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                        })(e, o);
                    };
                    return function (e, o) {
                      function i() {
                        this.constructor = e;
                      }
                      t(e, o),
                        (e.prototype =
                          null === o
                            ? Object.create(o)
                            : ((i.prototype = o.prototype), new i()));
                    };
                  })(),
                l = r.series,
                p = r.seriesTypes,
                h = p.column,
                c = p.scatter,
                u = n.prototype.symbols,
                d = s.extend,
                f = s.fireEvent,
                y = s.isNumber,
                m = s.merge,
                g = s.pick;
              return (
                (n = (function (e) {
                  function o() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                      (t.colorAxis = void 0),
                      (t.data = void 0),
                      (t.options = void 0),
                      (t.points = void 0),
                      (t.valueMax = NaN),
                      (t.valueMin = NaN),
                      t
                    );
                  }
                  return (
                    a(o, e),
                    (o.prototype.drawPoints = function () {
                      var t = this;
                      ((this.options.marker || {}).enabled ||
                        this._hasPointMarkers) &&
                        (l.prototype.drawPoints.call(this),
                        this.points.forEach(function (e) {
                          e.graphic &&
                            (e.graphic[t.chart.styledMode ? "css" : "animate"](
                              t.colorAttribs(e)
                            ),
                            t.options.borderRadius &&
                              e.graphic.attr({ r: t.options.borderRadius }),
                            ((e.shapeArgs || {}).r = t.options.borderRadius),
                            ((e.shapeArgs || {}).d = e.graphic.pathArray),
                            null === e.value &&
                              e.graphic.addClass("highcharts-null-point"));
                        }));
                    }),
                    (o.prototype.getExtremes = function () {
                      var t = l.prototype.getExtremes.call(
                          this,
                          this.valueData
                        ),
                        e = t.dataMin;
                      return (
                        (t = t.dataMax),
                        y(e) && (this.valueMin = e),
                        y(t) && (this.valueMax = t),
                        l.prototype.getExtremes.call(this)
                      );
                    }),
                    (o.prototype.getValidPoints = function (t, e) {
                      return l.prototype.getValidPoints.call(this, t, e, !0);
                    }),
                    (o.prototype.hasData = function () {
                      return !!this.processedXData.length;
                    }),
                    (o.prototype.init = function () {
                      l.prototype.init.apply(this, arguments);
                      var t = this.options;
                      (t.pointRange = g(t.pointRange, t.colsize || 1)),
                        (this.yAxis.axisPointRange = t.rowsize || 1),
                        (u.ellipse = u.circle);
                    }),
                    (o.prototype.markerAttribs = function (t, e) {
                      var o = t.marker || {},
                        i = this.options.marker || {},
                        r = t.shapeArgs || {},
                        n = {};
                      if (t.hasImage) return { x: t.plotX, y: t.plotY };
                      if (e) {
                        var s = i.states[e] || {},
                          a = (o.states && o.states[e]) || {};
                        [
                          ["width", "x"],
                          ["height", "y"],
                        ].forEach(function (t) {
                          (n[t[0]] =
                            (a[t[0]] || s[t[0]] || r[t[0]]) +
                            (a[t[0] + "Plus"] || s[t[0] + "Plus"] || 0)),
                            (n[t[1]] = r[t[1]] + (r[t[0]] - n[t[0]]) / 2);
                        });
                      }
                      return e ? n : r;
                    }),
                    (o.prototype.pointAttribs = function (e, o) {
                      var i = l.prototype.pointAttribs.call(this, e, o),
                        r = this.options || {},
                        n = this.chart.options.plotOptions || {},
                        s = n.series || {},
                        a = n.heatmap || {};
                      return (
                        (n =
                          (e && e.options.borderColor) ||
                          r.borderColor ||
                          a.borderColor ||
                          s.borderColor),
                        (s =
                          (e && e.options.borderWidth) ||
                          r.borderWidth ||
                          a.borderWidth ||
                          s.borderWidth ||
                          i["stroke-width"]),
                        (i.stroke =
                          (e && e.marker && e.marker.lineColor) ||
                          (r.marker && r.marker.lineColor) ||
                          n ||
                          this.color),
                        (i["stroke-width"] = s),
                        o &&
                          ((o = (e = m(
                            r.states[o],
                            r.marker && r.marker.states[o],
                            (e && e.options.states && e.options.states[o]) || {}
                          )).brightness),
                          (i.fill =
                            e.color ||
                            t
                              .parse(i.fill)
                              .brighten(o || 0)
                              .get()),
                          (i.stroke = e.lineColor)),
                        i
                      );
                    }),
                    (o.prototype.setClip = function (t) {
                      var e = this.chart;
                      l.prototype.setClip.apply(this, arguments),
                        (!1 !== this.options.clip || t) &&
                          this.markerGroup.clip(
                            (t || this.clipBox) && this.sharedClipKey
                              ? e.sharedClips[this.sharedClipKey]
                              : e.clipRect
                          );
                    }),
                    (o.prototype.translate = function () {
                      var t = this.options,
                        e = (t.marker && t.marker.symbol) || "rect",
                        o = u[e] ? e : "rect",
                        i = -1 !== ["circle", "square"].indexOf(o);
                      this.generatePoints(),
                        this.points.forEach(function (t) {
                          var r = t.getCellAttributes(),
                            n = {};
                          (n.x = Math.min(r.x1, r.x2)),
                            (n.y = Math.min(r.y1, r.y2)),
                            (n.width = Math.max(Math.abs(r.x2 - r.x1), 0)),
                            (n.height = Math.max(Math.abs(r.y2 - r.y1), 0));
                          var s = (t.hasImage =
                            0 ===
                            ((t.marker && t.marker.symbol) || e || "").indexOf(
                              "url"
                            ));
                          if (i) {
                            var a = Math.abs(n.width - n.height);
                            (n.x =
                              Math.min(r.x1, r.x2) +
                              (n.width < n.height ? 0 : a / 2)),
                              (n.y =
                                Math.min(r.y1, r.y2) +
                                (n.width < n.height ? a / 2 : 0)),
                              (n.width = n.height = Math.min(
                                n.width,
                                n.height
                              ));
                          }
                          (a = {
                            plotX: (r.x1 + r.x2) / 2,
                            plotY: (r.y1 + r.y2) / 2,
                            clientX: (r.x1 + r.x2) / 2,
                            shapeType: "path",
                            shapeArgs: m(!0, n, {
                              d: u[o](n.x, n.y, n.width, n.height),
                            }),
                          }),
                            s &&
                              (t.marker = { width: n.width, height: n.height }),
                            d(t, a);
                        }),
                        f(this, "afterTranslate");
                    }),
                    (o.defaultOptions = m(c.defaultOptions, {
                      animation: !1,
                      borderRadius: 0,
                      borderWidth: 0,
                      nullColor: "#f7f7f7",
                      dataLabels: {
                        formatter: function () {
                          var t = this.series.chart.numberFormatter,
                            e = this.point.value;
                          return y(e) ? t(e, -1) : "";
                        },
                        inside: !0,
                        verticalAlign: "middle",
                        crop: !1,
                        overflow: !1,
                        padding: 0,
                      },
                      marker: {
                        symbol: "rect",
                        radius: 0,
                        lineColor: void 0,
                        states: { hover: { lineWidthPlus: 0 }, select: {} },
                      },
                      clip: !0,
                      pointRange: null,
                      tooltip: {
                        pointFormat: "{point.x}, {point.y}: {point.value}<br/>",
                      },
                      states: { hover: { halo: !1, brightness: 0.2 } },
                    })),
                    o
                  );
                })(c)),
                d(n.prototype, {
                  alignDataLabel: h.prototype.alignDataLabel,
                  axisTypes: e.SeriesMixin.axisTypes,
                  colorAttribs: e.SeriesMixin.colorAttribs,
                  colorKey: e.SeriesMixin.colorKey,
                  directTouch: !0,
                  drawLegendSymbol: i.drawRectangle,
                  getExtremesFromAll: !0,
                  getSymbol: l.prototype.getSymbol,
                  parallelArrays: e.SeriesMixin.parallelArrays,
                  pointArrayMap: ["y", "value"],
                  pointClass: o,
                  trackerGroups: e.SeriesMixin.trackerGroups,
                }),
                r.registerSeriesType("heatmap", n),
                n
              );
            }
          ),
          e(
            t,
            "Extensions/GeoJSON.js",
            [
              t["Core/Chart/Chart.js"],
              t["Core/FormatUtilities.js"],
              t["Core/Globals.js"],
              t["Core/Utilities.js"],
            ],
            function (t, e, o, i) {
              function r(t, e) {
                var o,
                  i = !1,
                  r = t.x,
                  n = t.y;
                for (t = 0, o = e.length - 1; t < e.length; o = t++)
                  e[t][1] > n !== e[o][1] > n &&
                    r <
                      ((e[o][0] - e[t][0]) * (n - e[t][1])) /
                        (e[o][1] - e[t][1]) +
                        e[t][0] &&
                    (i = !i);
                return i;
              }
              var n = e.format,
                s = o.win,
                a = i.error,
                l = i.extend,
                p = i.merge;
              (e = i.wrap),
                (t.prototype.transformFromLatLon = function (t, e) {
                  var o = this.options.chart.proj4 || s.proj4;
                  if (!o) return a(21, !1, this), { x: 0, y: null };
                  var i = e.jsonmarginX;
                  i = void 0 === i ? 0 : i;
                  var r = e.jsonmarginY;
                  r = void 0 === r ? 0 : r;
                  var n = e.jsonres;
                  n = void 0 === n ? 1 : n;
                  var l = e.scale;
                  l = void 0 === l ? 1 : l;
                  var p = e.xoffset;
                  p = void 0 === p ? 0 : p;
                  var h = e.xpan;
                  h = void 0 === h ? 0 : h;
                  var c = e.yoffset;
                  c = void 0 === c ? 0 : c;
                  var u = e.ypan;
                  (u = void 0 === u ? 0 : u),
                    (t = o(e.crs, [t.lon, t.lat])),
                    (o = e.cosAngle || (e.rotation && Math.cos(e.rotation)));
                  var d = e.sinAngle || (e.rotation && Math.sin(e.rotation));
                  return {
                    x:
                      (((e = e.rotation
                        ? [t[0] * o + t[1] * d, -t[0] * d + t[1] * o]
                        : t)[0] -
                        p) *
                        l +
                        h) *
                        n +
                      i,
                    y: -(((c - e[1]) * l + u) * n - r),
                  };
                }),
                (t.prototype.transformToLatLon = function (t, e) {
                  if (this.options.chart.proj4 || s.proj4) {
                    if (null !== t.y) {
                      var o = e.jsonmarginX,
                        i = e.jsonmarginY,
                        r = e.jsonres;
                      r = void 0 === r ? 1 : r;
                      var n = e.scale;
                      n = void 0 === n ? 1 : n;
                      var l = e.xoffset,
                        p = e.xpan,
                        h = e.yoffset,
                        c = e.ypan;
                      return (
                        (t = {
                          x:
                            ((t.x - (void 0 === o ? 0 : o)) / r -
                              (void 0 === p ? 0 : p)) /
                              n +
                            (void 0 === l ? 0 : l),
                          y:
                            ((t.y - (void 0 === i ? 0 : i)) / r +
                              (void 0 === c ? 0 : c)) /
                              n +
                            (void 0 === h ? 0 : h),
                        }),
                        (o =
                          e.cosAngle || (e.rotation && Math.cos(e.rotation))),
                        (i =
                          e.sinAngle || (e.rotation && Math.sin(e.rotation))),
                        {
                          lat: (e = s.proj4(
                            e.crs,
                            "WGS84",
                            e.rotation
                              ? { x: t.x * o + t.y * -i, y: t.x * i + t.y * o }
                              : t
                          )).y,
                          lon: e.x,
                        }
                      );
                    }
                  } else a(21, !1, this);
                }),
                (t.prototype.fromPointToLatLon = function (t) {
                  var e = this.mapTransforms;
                  if (e) {
                    for (var o in e)
                      if (
                        Object.hasOwnProperty.call(e, o) &&
                        e[o].hitZone &&
                        r(t, e[o].hitZone.coordinates[0])
                      )
                        return this.transformToLatLon(t, e[o]);
                    return this.transformToLatLon(t, e.default);
                  }
                  a(22, !1, this);
                }),
                (t.prototype.fromLatLonToPoint = function (t) {
                  var e,
                    o = this.mapTransforms;
                  if (!o) return a(22, !1, this), { x: 0, y: null };
                  for (e in o)
                    if (Object.hasOwnProperty.call(o, e) && o[e].hitZone) {
                      var i = this.transformFromLatLon(t, o[e]);
                      if (r(i, o[e].hitZone.coordinates[0])) return i;
                    }
                  return this.transformFromLatLon(t, o.default);
                }),
                (o.geojson = function (t, e, o) {
                  void 0 === e && (e = "map");
                  var i = [];
                  return (
                    t.features.forEach(function (t) {
                      var o,
                        r = t.geometry || {},
                        n = r.type;
                      (r = r.coordinates),
                        (t = t.properties),
                        (("map" !== e && "mapbubble" !== e) ||
                          ("Polygon" !== n && "MultiPolygon" !== n)) &&
                        ("mapline" !== e ||
                          ("LineString" !== n && "MultiLineString" !== n))
                          ? "mappoint" === e &&
                            "Point" === n &&
                            r.length &&
                            (o = { geometry: { coordinates: r, type: n } })
                          : r.length &&
                            (o = { geometry: { coordinates: r, type: n } }),
                        o &&
                          i.push(
                            l(o, { name: t.name || t.NAME, properties: t })
                          );
                    }),
                    o &&
                      t.copyrightShort &&
                      ((o.chart.mapCredits = n(
                        o.chart.options.credits.mapText,
                        { geojson: t }
                      )),
                      (o.chart.mapCreditsFull = n(
                        o.chart.options.credits.mapTextFull,
                        { geojson: t }
                      ))),
                    i
                  );
                }),
                e(t.prototype, "addCredits", function (t, e) {
                  (e = p(!0, this.options.credits, e)),
                    this.mapCredits && (e.href = null),
                    t.call(this, e),
                    this.credits &&
                      this.mapCreditsFull &&
                      this.credits.attr({ title: this.mapCreditsFull });
                });
            }
          ),
          e(
            t,
            "masters/modules/map.src.js",
            [
              t["Core/Globals.js"],
              t["Core/Axis/Color/ColorAxis.js"],
              t["Series/MapBubble/MapBubbleSeries.js"],
              t["Core/Chart/MapChart.js"],
            ],
            function (t, e, o, i) {
              (t.ColorAxis = e),
                (t.MapChart = i),
                (t.mapChart = t.Map = i.mapChart),
                (t.maps = i.maps),
                e.compose(t.Chart, t.Fx, t.Legend, t.Series),
                o.compose(t.Chart, t.Legend, t.Series);
            }
          );
      }),
        t.exports
          ? ((n.default = n), (t.exports = n))
          : ((i = [o(78840)]),
            void 0 ===
              (r = function (t) {
                return n(t), (n.Highcharts = t), n;
              }.apply(e, i)) || (t.exports = r));
    },
    97975: function (t, e, o) {
      "use strict";
      var i = o(22122),
        r = o(19756),
        n = o(63349),
        s = o(41788),
        a = o(67294),
        l = o(45697),
        p = o.n(l),
        h = o(94184),
        c = o.n(h),
        u = o(23663),
        d = {
          active: p().bool,
          "aria-label": p().string,
          block: p().bool,
          color: p().string,
          disabled: p().bool,
          outline: p().bool,
          tag: u.iC,
          innerRef: p().oneOfType([p().object, p().func, p().string]),
          onClick: p().func,
          size: p().string,
          children: p().node,
          className: p().string,
          cssModule: p().object,
          close: p().bool,
        },
        f = (function (t) {
          function e(e) {
            var o;
            return (
              ((o = t.call(this, e) || this).onClick = o.onClick.bind(
                (0, n.Z)(o)
              )),
              o
            );
          }
          (0, s.Z)(e, t);
          var o = e.prototype;
          return (
            (o.onClick = function (t) {
              if (!this.props.disabled)
                return this.props.onClick ? this.props.onClick(t) : void 0;
              t.preventDefault();
            }),
            (o.render = function () {
              var t = this.props,
                e = t.active,
                o = t["aria-label"],
                n = t.block,
                s = t.className,
                l = t.close,
                p = t.cssModule,
                h = t.color,
                d = t.outline,
                f = t.size,
                y = t.tag,
                m = t.innerRef,
                g = (0, r.Z)(t, [
                  "active",
                  "aria-label",
                  "block",
                  "className",
                  "close",
                  "cssModule",
                  "color",
                  "outline",
                  "size",
                  "tag",
                  "innerRef",
                ]);
              l &&
                "undefined" === typeof g.children &&
                (g.children = a.createElement(
                  "span",
                  { "aria-hidden": !0 },
                  "\xd7"
                ));
              var b = "btn" + (d ? "-outline" : "") + "-" + h,
                v = (0, u.mx)(
                  c()(
                    s,
                    { close: l },
                    l || "btn",
                    l || b,
                    !!f && "btn-" + f,
                    !!n && "btn-block",
                    { active: e, disabled: this.props.disabled }
                  ),
                  p
                );
              g.href && "button" === y && (y = "a");
              var x = l ? "Close" : null;
              return a.createElement(
                y,
                (0, i.Z)(
                  { type: "button" === y && g.onClick ? "button" : void 0 },
                  g,
                  {
                    className: v,
                    ref: m,
                    onClick: this.onClick,
                    "aria-label": o || x,
                  }
                )
              );
            }),
            e
          );
        })(a.Component);
      (f.propTypes = d),
        (f.defaultProps = { color: "secondary", tag: "button" }),
        (e.Z = f);
    },
    71997: function (t, e, o) {
      "use strict";
      var i = o(22122),
        r = o(19756),
        n = o(67294),
        s = o(45697),
        a = o.n(s),
        l = o(94184),
        p = o.n(l),
        h = o(23663),
        c = {
          tag: h.iC,
          "aria-label": a().string,
          className: a().string,
          cssModule: a().object,
          role: a().string,
          size: a().string,
          vertical: a().bool,
        },
        u = function (t) {
          var e = t.className,
            o = t.cssModule,
            s = t.size,
            a = t.vertical,
            l = t.tag,
            c = (0, r.Z)(t, [
              "className",
              "cssModule",
              "size",
              "vertical",
              "tag",
            ]),
            u = (0, h.mx)(
              p()(
                e,
                !!s && "btn-group-" + s,
                a ? "btn-group-vertical" : "btn-group"
              ),
              o
            );
          return n.createElement(l, (0, i.Z)({}, c, { className: u }));
        };
      (u.propTypes = c),
        (u.defaultProps = { tag: "div", role: "group" }),
        (e.Z = u);
    },
  },
]);
