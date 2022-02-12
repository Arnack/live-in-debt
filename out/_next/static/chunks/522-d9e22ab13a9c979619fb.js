(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [522],
  {
    53522: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return A;
        },
      });
      var i = n(85893),
        o = n(34699),
        s = n(67294);
      n(11163), n(41664);
      n(46146),
        n(8347),
        n(21154),
        n(67341),
        n(89098),
        n(35762),
        n(56285),
        n(6477),
        n(68970);
      var r = n(96156),
        a = n(6610),
        l = n(5991),
        c = n(63349),
        h = n(65255),
        u = n(46070),
        p = n(77608),
        d = n(37727),
        f = n(73935),
        v = (function (t) {
          var e = t.version;
          if ("string" !== typeof e) return !0;
          var n = e.split("."),
            i = parseInt(n[0], 10),
            o = parseInt(n[1], 10);
          return 0 === i && 13 === o;
        })(s),
        y = !1;
      function S(t) {
        return v ? f.findDOMNode(t) : t;
      }
      function m(t) {
        return t < 0 ? 0 : t;
      }
      function g(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function (t) {
                  return t;
                },
          n = {};
        for (var i in t) t.hasOwnProperty(i) && (n[i] = e(t[i]));
        return n;
      }
      function P(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function w(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = (0, p.Z)(t);
          if (e) {
            var o = (0, p.Z)(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return (0, u.Z)(this, n);
        };
      }
      var k = (function (t) {
        (0, h.Z)(n, t);
        var e = w(n);
        function n(t) {
          var i;
          (0, a.Z)(this, n);
          var o = (i = e.call(this, t)).calculateState(t);
          return (
            (i.state = {
              position: o.position,
              scrollSize: o.scrollSize,
              isDragging: !1,
              lastClientPosition: 0,
            }),
            "vertical" === t.type
              ? (i.bindedHandleMouseMove = i.handleMouseMoveForVertical.bind(
                  (0, c.Z)(i)
                ))
              : (i.bindedHandleMouseMove = i.handleMouseMoveForHorizontal.bind(
                  (0, c.Z)(i)
                )),
            (i.bindedHandleMouseUp = i.handleMouseUp.bind((0, c.Z)(i))),
            i
          );
        }
        return (
          (0, l.Z)(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.ownerDocument &&
                  (this.props.ownerDocument.addEventListener(
                    "mousemove",
                    this.bindedHandleMouseMove
                  ),
                  this.props.ownerDocument.addEventListener(
                    "mouseup",
                    this.bindedHandleMouseUp
                  ));
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (t) {
                this.setState(this.calculateState(t));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.props.ownerDocument &&
                  (this.props.ownerDocument.removeEventListener(
                    "mousemove",
                    this.bindedHandleMouseMove
                  ),
                  this.props.ownerDocument.removeEventListener(
                    "mouseup",
                    this.bindedHandleMouseUp
                  ));
              },
            },
            {
              key: "calculateFractionalPosition",
              value: function (t, e, n) {
                var i = t - e;
                return 1 - (i - n) / i;
              },
            },
            {
              key: "calculateState",
              value: function (t) {
                var e = this.calculateFractionalPosition(
                    t.realSize,
                    t.containerSize,
                    t.position
                  ),
                  n = (t.containerSize * t.containerSize) / t.realSize,
                  i = n < t.minScrollSize ? t.minScrollSize : n,
                  o = (t.containerSize - i) * e;
                return { scrollSize: i, position: Math.round(o) };
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.smoothScrolling,
                  o = e.isDragging,
                  s = e.type,
                  r = e.scrollbarStyle,
                  a = e.containerStyle,
                  l = "horizontal" === s,
                  c = "vertical" === s,
                  h = this.createScrollStyles(),
                  u = n
                    ? g(h, function (t) {
                        return (0, d.ST)(t);
                      })
                    : h,
                  p = "scrollbar-container "
                    .concat(o ? "active" : "", " ")
                    .concat(l ? "horizontal" : "", " ")
                    .concat(c ? "vertical" : "");
                return (0, i.jsx)(d.y_, {
                  style: u,
                  children: function (e) {
                    return (0, i.jsx)("div", {
                      className: p,
                      style: a,
                      onMouseDown: t.handleScrollBarContainerClick.bind(t),
                      ref: function (e) {
                        return (t.scrollbarContainer = e);
                      },
                      children: (0, i.jsx)("div", {
                        className: "scrollbar",
                        style: b(b({}, r), e),
                        onMouseDown: t.handleMouseDown.bind(t),
                      }),
                    });
                  },
                });
              },
            },
            {
              key: "handleScrollBarContainerClick",
              value: function (t) {
                t.preventDefault();
                var e = this.computeMultiplier(),
                  n = this.isVertical() ? t.clientY : t.clientX,
                  i = this.scrollbarContainer.getBoundingClientRect(),
                  o = i.top,
                  s = i.left,
                  r = n - (this.isVertical() ? o : s),
                  a =
                    (this.props.containerSize * this.props.containerSize) /
                    this.props.realSize;
                this.setState({ isDragging: !0, lastClientPosition: n }),
                  this.props.onPositionChange((r - a / 2) / e);
              },
            },
            {
              key: "handleMouseMoveForHorizontal",
              value: function (t) {
                var e = this.computeMultiplier();
                if (this.state.isDragging) {
                  var n = this.state.lastClientPosition - t.clientX;
                  this.setState({ lastClientPosition: t.clientX }),
                    this.props.onMove(0, n / e);
                }
              },
            },
            {
              key: "handleMouseMoveForVertical",
              value: function (t) {
                var e = this.computeMultiplier();
                if (this.state.isDragging) {
                  var n = this.state.lastClientPosition - t.clientY;
                  this.setState({ lastClientPosition: t.clientY }),
                    this.props.onMove(n / e, 0);
                }
              },
            },
            {
              key: "handleMouseDown",
              value: function (t) {
                t.stopPropagation();
                var e = this.isVertical() ? t.clientY : t.clientX;
                this.setState({ isDragging: !0, lastClientPosition: e }),
                  this.props.onFocus();
              },
            },
            {
              key: "handleMouseUp",
              value: function (t) {
                this.setState({ isDragging: !1 });
              },
            },
            {
              key: "createScrollStyles",
              value: function () {
                return "vertical" === this.props.type
                  ? {
                      height: this.state.scrollSize,
                      marginTop: this.state.position,
                    }
                  : {
                      width: this.state.scrollSize,
                      marginLeft: this.state.position,
                    };
              },
            },
            {
              key: "computeMultiplier",
              value: function () {
                return this.props.containerSize / this.props.realSize;
              },
            },
            {
              key: "isVertical",
              value: function () {
                return "vertical" === this.props.type;
              },
            },
          ]),
          n
        );
      })(s.Component);
      k.defaultProps = { type: "vertical", smoothScrolling: !1 };
      var z = k,
        M = n(58303),
        j = n.n(M),
        D = n(45697),
        T = n.n(D);
      function W(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function C(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? W(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function H(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = (0, p.Z)(t);
          if (e) {
            var o = (0, p.Z)(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return (0, u.Z)(this, n);
        };
      }
      var x = "wheel",
        O = "api",
        N = "touchEnd",
        X = "keypress",
        Y = (function (t) {
          (0, h.Z)(n, t);
          var e = H(n);
          function n(t) {
            var i;
            return (
              (0, a.Z)(this, n),
              ((i = e.call(this, t)).state = {
                topPosition: 0,
                leftPosition: 0,
                realHeight: 0,
                containerHeight: 0,
                realWidth: 0,
                containerWidth: 0,
              }),
              (i.scrollArea = {
                refresh: function () {
                  i.setSizesToState();
                },
                scrollTop: function () {
                  i.scrollTop();
                },
                scrollBottom: function () {
                  i.scrollBottom();
                },
                scrollYTo: function (t) {
                  i.scrollYTo(t);
                },
                scrollLeft: function () {
                  i.scrollLeft();
                },
                scrollRight: function () {
                  i.scrollRight();
                },
                scrollXTo: function (t) {
                  i.scrollXTo(t);
                },
              }),
              (i.evntsPreviousValues = {
                clientX: 0,
                clientY: 0,
                deltaX: 0,
                deltaY: 0,
              }),
              (i.bindedHandleWindowResize = i.handleWindowResize.bind(
                (0, c.Z)(i)
              )),
              i
            );
          }
          return (
            (0, l.Z)(n, [
              {
                key: "getChildContext",
                value: function () {
                  return { scrollArea: this.scrollArea };
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.contentWindow &&
                    this.props.contentWindow.addEventListener(
                      "resize",
                      this.bindedHandleWindowResize
                    ),
                    (this.lineHeightPx = j()(S(this.content))),
                    this.setSizesToState();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.contentWindow &&
                    this.props.contentWindow.removeEventListener(
                      "resize",
                      this.bindedHandleWindowResize
                    );
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.setSizesToState();
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.children,
                    o = e.className,
                    s = e.contentClassName,
                    r = e.ownerDocument,
                    a =
                      this.props.smoothScrolling &&
                      (this.state.eventType === x ||
                        this.state.eventType === O ||
                        this.state.eventType === N ||
                        this.state.eventType === X),
                    l = this.canScrollY()
                      ? (0, i.jsx)(z, {
                          ownerDocument: r,
                          realSize: this.state.realHeight,
                          containerSize: this.state.containerHeight,
                          position: this.state.topPosition,
                          onMove: this.handleScrollbarMove.bind(this),
                          onPositionChange: this.handleScrollbarYPositionChange.bind(
                            this
                          ),
                          containerStyle: this.props.verticalContainerStyle,
                          scrollbarStyle: this.props.verticalScrollbarStyle,
                          smoothScrolling: a,
                          minScrollSize: this.props.minScrollSize,
                          onFocus: this.focusContent.bind(this),
                          type: "vertical",
                        })
                      : null,
                    c = this.canScrollX()
                      ? (0, i.jsx)(z, {
                          ownerDocument: r,
                          realSize: this.state.realWidth,
                          containerSize: this.state.containerWidth,
                          position: this.state.leftPosition,
                          onMove: this.handleScrollbarMove.bind(this),
                          onPositionChange: this.handleScrollbarXPositionChange.bind(
                            this
                          ),
                          containerStyle: this.props.horizontalContainerStyle,
                          scrollbarStyle: this.props.horizontalScrollbarStyle,
                          smoothScrolling: a,
                          minScrollSize: this.props.minScrollSize,
                          onFocus: this.focusContent.bind(this),
                          type: "horizontal",
                        })
                      : null;
                  "function" === typeof n
                    ? (y ||
                        v ||
                        ((y = !0),
                        console.error(
                          "With React 0.14 and later versions, you no longer need to wrap <ScrollArea> child into a function."
                        )),
                      (n = n()))
                    : !y &&
                      v &&
                      ((y = !0),
                      console.error(
                        "With React 0.13, you need to wrap <ScrollArea> child into a function."
                      ));
                  var h = "scrollarea " + (o || ""),
                    u = "scrollarea-content " + (s || ""),
                    p = {
                      marginTop: -this.state.topPosition,
                      marginLeft: -this.state.leftPosition,
                    },
                    f = a
                      ? g(p, function (t) {
                          return (0, d.ST)(t);
                        })
                      : p;
                  return (0, i.jsx)(d.y_, {
                    style: f,
                    children: function (e) {
                      return (0, i.jsxs)("div", {
                        ref: function (e) {
                          return (t.wrapper = e);
                        },
                        className: h,
                        style: t.props.style,
                        onWheel: t.handleWheel.bind(t),
                        children: [
                          (0, i.jsx)("div", {
                            ref: function (e) {
                              return (t.content = e);
                            },
                            style: C(C({}, t.props.contentStyle), e),
                            className: u,
                            onTouchStart: t.handleTouchStart.bind(t),
                            onTouchMove: t.handleTouchMove.bind(t),
                            onTouchEnd: t.handleTouchEnd.bind(t),
                            onKeyDown: t.handleKeyDown.bind(t),
                            tabIndex: t.props.focusableTabIndex,
                            children: n,
                          }),
                          l,
                          c,
                        ],
                      });
                    },
                  });
                },
              },
              {
                key: "setStateFromEvent",
                value: function (t, e) {
                  this.props.onScroll && this.props.onScroll(t),
                    this.setState(C(C({}, t), {}, { eventType: e }));
                },
              },
              {
                key: "handleTouchStart",
                value: function (t) {
                  var e = t.touches;
                  if (1 === e.length) {
                    var n = e[0],
                      i = n.clientX,
                      o = n.clientY;
                    this.eventPreviousValues = C(
                      C({}, this.eventPreviousValues),
                      {},
                      { clientY: o, clientX: i, timestamp: Date.now() }
                    );
                  }
                },
              },
              {
                key: "handleTouchMove",
                value: function (t) {
                  t.stopPropagation();
                  var e = t.touches;
                  if (1 === e.length) {
                    var n = e[0],
                      i = n.clientX,
                      o = n.clientY,
                      s = this.eventPreviousValues.clientY - o,
                      r = this.eventPreviousValues.clientX - i;
                    (this.eventPreviousValues = C(
                      C({}, this.eventPreviousValues),
                      {},
                      {
                        deltaY: s,
                        deltaX: r,
                        clientY: o,
                        clientX: i,
                        timestamp: Date.now(),
                      }
                    )),
                      this.setStateFromEvent(this.composeNewState(-r, -s));
                  }
                },
              },
              {
                key: "handleTouchEnd",
                value: function (t) {
                  var e = this.eventPreviousValues,
                    n = e.deltaX,
                    i = e.deltaY,
                    o = e.timestamp;
                  "undefined" === typeof n && (n = 0),
                    "undefined" === typeof i && (i = 0),
                    Date.now() - o < 200 &&
                      this.setStateFromEvent(
                        this.composeNewState(10 * -n, 10 * -i),
                        N
                      ),
                    (this.eventPreviousValues = C(
                      C({}, this.eventPreviousValues),
                      {},
                      { deltaY: 0, deltaX: 0 }
                    ));
                },
              },
              {
                key: "handleScrollbarMove",
                value: function (t, e) {
                  this.setStateFromEvent(this.composeNewState(e, t));
                },
              },
              {
                key: "handleScrollbarXPositionChange",
                value: function (t) {
                  this.scrollXTo(t);
                },
              },
              {
                key: "handleScrollbarYPositionChange",
                value: function (t) {
                  this.scrollYTo(t);
                },
              },
              {
                key: "handleWheel",
                value: function (t) {
                  var e = t.deltaY,
                    n = t.deltaX;
                  if (this.props.swapWheelAxes) {
                    var i = [n, e];
                    (e = i[0]), (n = i[1]);
                  }
                  1 === t.deltaMode &&
                    ((e *= this.lineHeightPx), (n *= this.lineHeightPx)),
                    (e *= this.props.speed),
                    (n *= this.props.speed);
                  var o = this.composeNewState(-n, -e);
                  ((o.topPosition &&
                    this.state.topPosition !== o.topPosition) ||
                    (o.leftPosition &&
                      this.state.leftPosition !== o.leftPosition) ||
                    this.props.stopScrollPropagation) &&
                    t.stopPropagation(),
                    this.setStateFromEvent(o, x),
                    this.focusContent();
                },
              },
              {
                key: "handleKeyDown",
                value: function (t) {
                  if ("input" !== t.target.tagName.toLowerCase()) {
                    var e = 0,
                      n = 0,
                      i = this.lineHeightPx ? this.lineHeightPx : 10;
                    switch (t.keyCode) {
                      case 33:
                        e = this.state.containerHeight - i;
                        break;
                      case 34:
                        e = -this.state.containerHeight + i;
                        break;
                      case 37:
                        n = i;
                        break;
                      case 38:
                        e = i;
                        break;
                      case 39:
                        n = -i;
                        break;
                      case 40:
                        e = -i;
                    }
                    if (0 !== e || 0 !== n) {
                      var o = this.composeNewState(n, e);
                      t.stopPropagation(), this.setStateFromEvent(o, X);
                    }
                  }
                },
              },
              {
                key: "handleWindowResize",
                value: function () {
                  var t = this.computeSizes();
                  (t = this.getModifiedPositionsIfNeeded(t)),
                    this.setStateFromEvent(t);
                },
              },
              {
                key: "composeNewState",
                value: function (t, e) {
                  var n = this.computeSizes();
                  return (
                    this.canScrollY(n)
                      ? (n.topPosition = this.computeTopPosition(e, n))
                      : (n.topPosition = 0),
                    this.canScrollX(n) &&
                      (n.leftPosition = this.computeLeftPosition(t, n)),
                    n
                  );
                },
              },
              {
                key: "computeTopPosition",
                value: function (t, e) {
                  var n = this.state.topPosition - t;
                  return this.normalizeTopPosition(n, e);
                },
              },
              {
                key: "computeLeftPosition",
                value: function (t, e) {
                  var n = this.state.leftPosition - t;
                  return this.normalizeLeftPosition(n, e);
                },
              },
              {
                key: "normalizeTopPosition",
                value: function (t, e) {
                  return (
                    t > e.realHeight - e.containerHeight &&
                      (t = e.realHeight - e.containerHeight),
                    t < 0 && (t = 0),
                    t
                  );
                },
              },
              {
                key: "normalizeLeftPosition",
                value: function (t, e) {
                  return (
                    t > e.realWidth - e.containerWidth
                      ? (t = e.realWidth - e.containerWidth)
                      : t < 0 && (t = 0),
                    t
                  );
                },
              },
              {
                key: "computeSizes",
                value: function () {
                  return {
                    realHeight: this.content.offsetHeight,
                    containerHeight: this.wrapper.offsetHeight,
                    realWidth: this.content.offsetWidth,
                    containerWidth: this.wrapper.offsetWidth,
                  };
                },
              },
              {
                key: "setSizesToState",
                value: function () {
                  var t = this.computeSizes();
                  (t.realHeight === this.state.realHeight &&
                    t.realWidth === this.state.realWidth) ||
                    this.setStateFromEvent(
                      this.getModifiedPositionsIfNeeded(t)
                    );
                },
              },
              {
                key: "scrollTop",
                value: function () {
                  this.scrollYTo(0);
                },
              },
              {
                key: "scrollBottom",
                value: function () {
                  this.scrollYTo(
                    this.state.realHeight - this.state.containerHeight
                  );
                },
              },
              {
                key: "scrollLeft",
                value: function () {
                  this.scrollXTo(0);
                },
              },
              {
                key: "scrollRight",
                value: function () {
                  this.scrollXTo(
                    this.state.realWidth - this.state.containerWidth
                  );
                },
              },
              {
                key: "scrollYTo",
                value: function (t) {
                  if (this.canScrollY()) {
                    var e = this.normalizeTopPosition(t, this.computeSizes());
                    this.setStateFromEvent({ topPosition: e }, O);
                  }
                },
              },
              {
                key: "scrollXTo",
                value: function (t) {
                  if (this.canScrollX()) {
                    var e = this.normalizeLeftPosition(t, this.computeSizes());
                    this.setStateFromEvent({ leftPosition: e }, O);
                  }
                },
              },
              {
                key: "canScrollY",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.state,
                    e = t.realHeight > t.containerHeight;
                  return e && this.props.vertical;
                },
              },
              {
                key: "canScrollX",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.state,
                    e = t.realWidth > t.containerWidth;
                  return e && this.props.horizontal;
                },
              },
              {
                key: "getModifiedPositionsIfNeeded",
                value: function (t) {
                  var e = t.realHeight - t.containerHeight;
                  this.state.topPosition >= e &&
                    (t.topPosition = this.canScrollY(t) ? m(e) : 0);
                  var n = t.realWidth - t.containerWidth;
                  return (
                    this.state.leftPosition >= n &&
                      (t.leftPosition = this.canScrollX(t) ? m(n) : 0),
                    t
                  );
                },
              },
              {
                key: "focusContent",
                value: function () {
                  this.content && S(this.content).focus();
                },
              },
            ]),
            n
          );
        })(s.Component);
      (Y.childContextTypes = { scrollArea: T().object }),
        (Y.defaultProps = {
          speed: 1,
          vertical: !0,
          horizontal: !0,
          smoothScrolling: !1,
          swapWheelAxes: !1,
          contentWindow: window,
          ownerDocument: "object" === typeof document ? document : void 0,
          focusableTabIndex: 1,
        });
      var E = n(10577),
        R = n.n(E),
        Z = (n(37495), n(96622)),
        F = n.n(Z),
        L =
          (n(73421),
          n(13813),
          n(55523),
          n(86374),
          n(47766),
          n(80515),
          n(10085),
          n(69570),
          n(88833),
          function (t) {
            return (0, i.jsxs)("header", {
              className:
                "site-head d-flex align-items-center justify-content-between",
              children: [
                (0, i.jsx)("div", { className: "wrap mr-4" }),
                (0, i.jsx)("div", {
                  className: "right-elems ml-auto d-flex",
                  children: (0, i.jsx)("div", {
                    className: "full-screen-wrapper wrap hidden-sm-down",
                    children: (0, i.jsx)(F(), {
                      size: "22",
                      color: "#fff",
                      onClick: function () {
                        return R().toggle();
                      },
                    }),
                  }),
                }),
              ],
            });
          }),
        V = n(9008);
      function A(t) {
        var e = s.useState(!1),
          n = (0, o.Z)(e, 2),
          r = n[0],
          a = n[1];
        return (0, i.jsxs)("div", {
          className: "app-wrapper",
          children: [
            (0, i.jsxs)(V.default, {
              children: [
                (0, i.jsx)("meta", { name: "description", content: "" }),
                (0, i.jsx)("title", {
                  children:
                    "\u0416\u0438\u0437\u043d\u044c \u0432 \u043a\u0440\u0435\u0434\u0438\u0442",
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "content-container ".concat(r ? "full" : ""),
              children: [
                (0, i.jsx)("div", {
                  className: "menu-dropshadow",
                  style: { display: r ? "block" : "none" },
                  onClick: function (t) {
                    t.stopPropagation(), t.preventDefault(), a(!1);
                  },
                }),
                (0, i.jsx)(L, {
                  toggleNav: function (t) {
                    t.preventDefault(),
                      a(function (t) {
                        return !t;
                      });
                  },
                }),
                (0, i.jsx)("div", { className: "view", children: t.children }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
