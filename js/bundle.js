!(function (M) {
  var e = {};
  function L(t) {
    if (e[t]) return e[t].exports;
    var c = (e[t] = { i: t, l: !1, exports: {} });
    return M[t].call(c.exports, c, c.exports, L), (c.l = !0), c.exports;
  }
  (L.m = M),
    (L.c = e),
    (L.d = function (M, e, t) {
      L.o(M, e) || Object.defineProperty(M, e, { enumerable: !0, get: t });
    }),
    (L.r = function (M) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(M, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(M, "__esModule", { value: !0 });
    }),
    (L.t = function (M, e) {
      if ((1 & e && (M = L(M)), 8 & e)) return M;
      if (4 & e && "object" == typeof M && M && M.__esModule) return M;
      var t = Object.create(null);
      if (
        (L.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: M }),
        2 & e && "string" != typeof M)
      )
        for (var c in M)
          L.d(
            t,
            c,
            function (e) {
              return M[e];
            }.bind(null, c)
          );
      return t;
    }),
    (L.n = function (M) {
      var e =
        M && M.__esModule
          ? function () {
              return M.default;
            }
          : function () {
              return M;
            };
      return L.d(e, "a", e), e;
    }),
    (L.o = function (M, e) {
      return Object.prototype.hasOwnProperty.call(M, e);
    }),
    (L.p = "public"),
    L((L.s = 0));
})([
  function (M, e, L) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t,
      c,
      N = L(1),
      j = !1,
      u = 0,
      i = 0,
      D = new N.Tv("LG", "Z1", "4K", "16:9", "55 inch"),
      o = new N.Tv("Samsung", "F1", "4K", "4:3", "43 inch"),
      z = new N.Tv("Xiaomi", "A10", "FHD", "16:9", "49 inch"),
      n = [
        "./videos/1.mp4",
        "./videos/2.mp4",
        "./videos/3.mp4",
        "./videos/4.mp4",
        "./videos/5.mp4",
      ],
      g =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0IDM4NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTI4OCwxOTJjMC0zNy42NTMtMjEuNzYtNzAuMTg3LTUzLjMzMy04NS44Njd2NDcuMTQ3bDUyLjM3Myw1Mi4zNzNDMjg3LjY4LDIwMS4xNzMsMjg4LDE5Ni41ODcsMjg4LDE5MnoiLz4NCgkJCTxwYXRoIGQ9Ik0zNDEuMzMzLDE5MmMwLDIwLjA1My00LjM3MywzOC45MzMtMTEuNTIsNTYuMzJsMzIuMzIsMzIuMzJDMzc2LDI1NC4wOCwzODQsMjI0LDM4NCwxOTINCgkJCQljMC05MS4zMDctNjMuODkzLTE2Ny42OC0xNDkuMzMzLTE4Ny4wOTNWNDguOTZDMjk2LjMyLDY3LjMwNywzNDEuMzMzLDEyNC4zNzMsMzQxLjMzMywxOTJ6Ii8+DQoJCQk8cG9seWdvbiBwb2ludHM9IjE5MiwyMS4zMzMgMTQ3LjQxMyw2NS45MiAxOTIsMTEwLjUwNyAJCQkiLz4NCgkJCTxwYXRoIGQ9Ik0yNy4yLDBMMCwyNy4yTDEwMC44LDEyOEgwdjEyOGg4NS4zMzNMMTkyLDM2Mi42NjdWMjE5LjJsOTAuNzczLDkwLjc3M2MtMTQuMjkzLDEwLjk4Ny0zMC40LDE5Ljg0LTQ4LjEwNywyNS4xNzNWMzc5LjINCgkJCQljMjkuMzMzLTYuNzIsNTYuMTA3LTIwLjE2LDc4LjYxMy0zOC42MTNMMzU2LjgsMzg0bDI3LjItMjcuMmwtMTkyLTE5MkwyNy4yLDB6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
      C =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjE2My44NjFweCIgaGVpZ2h0PSIxNjMuODYxcHgiIHZpZXdCb3g9IjAgMCAxNjMuODYxIDE2My44NjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2My44NjEgMTYzLjg2MTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTM0Ljg1NywzLjYxM0MyMC4wODQtNC44NjEsOC4xMDcsMi4wODEsOC4xMDcsMTkuMTA2djEyNS42MzdjMCwxNy4wNDIsMTEuOTc3LDIzLjk3NSwyNi43NSwxNS41MDlMMTQ0LjY3LDk3LjI3NQ0KCQljMTQuNzc4LTguNDc3LDE0Ljc3OC0yMi4yMTEsMC0zMC42ODZMMzQuODU3LDMuNjEzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
      w = document.querySelector("#tv-video");
    (w.src = n[i]),
      (u = 0.5),
      (w.volume = u),
      document
        .querySelector("#volume-down")
        .addEventListener("click", function () {
          (u -= 0.1), (w.volume = u);
        }),
      document
        .querySelector("#volume-up")
        .addEventListener("click", function () {
          (u += 0.1), (w.volume = u);
        }),
      document
        .querySelector("#volume-mute")
        .addEventListener("click", function () {
          0 != u
            ? ((t = u),
              (u = 0),
              (document.querySelector("#image-mute").src =
                "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjkzLjAzOHB4IiBoZWlnaHQ9IjkzLjAzOHB4IiB2aWV3Qm94PSIwIDAgOTMuMDM4IDkzLjAzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTMuMDM4IDkzLjAzODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ2LjU0Nyw3NS41MjFjMCwxLjYzOS0wLjk0NywzLjEyOC0yLjQyOSwzLjgyM2MtMC41NzMsMC4yNzEtMS4xODcsMC40MDItMS43OTcsMC40MDJjLTAuOTY2LDAtMS45MjMtMC4zMzItMi42OTYtMC45NzMNCgkJbC0yMy4wOTgtMTkuMTRINC4yMjVDMS44OTIsNTkuNjM1LDAsNTcuNzQyLDAsNTUuNDA5VjM4LjU3NmMwLTIuMzM0LDEuODkyLTQuMjI2LDQuMjI1LTQuMjI2aDEyLjMwM2wyMy4wOTgtMTkuMTQNCgkJYzEuMjYyLTEuMDQ2LDMuMDEyLTEuMjY5LDQuNDkzLTAuNTY5YzEuNDgxLDAuNjk1LDIuNDI5LDIuMTg1LDIuNDI5LDMuODIzTDQ2LjU0Nyw3NS41MjFMNDYuNTQ3LDc1LjUyMXogTTYyLjc4NCw2OC45MTkNCgkJYy0wLjEwMywwLjAwNy0wLjIwMiwwLjAxMS0wLjMwNCwwLjAxMWMtMS4xMTYsMC0yLjE5Mi0wLjQ0MS0yLjk4Ny0xLjIzN2wtMC41NjUtMC41NjdjLTEuNDgyLTEuNDc5LTEuNjU2LTMuODIyLTAuNDA4LTUuNTA0DQoJCWMzLjE2NC00LjI2Niw0LjgzNC05LjMyMyw0LjgzNC0xNC42MjhjMC01LjcwNi0xLjg5Ni0xMS4wNTgtNS40ODQtMTUuNDc4Yy0xLjM2Ni0xLjY4LTEuMjQtNC4xMiwwLjI5MS01LjY1bDAuNTY0LTAuNTY1DQoJCWMwLjg0NC0wLjg0NCwxLjk3NS0xLjMwNCwzLjE5OS0xLjIzMWMxLjE5MiwwLjA2LDIuMzA1LDAuNjIxLDMuMDYxLDEuNTQ1YzQuOTc3LDYuMDksNy42MDYsMTMuNDg0LDcuNjA2LDIxLjM4DQoJCWMwLDcuMzU0LTIuMzI1LDE0LjM1NC02LjcyNSwyMC4yNEM2NS4xMzEsNjguMjE2LDY0LjAwNyw2OC44MzIsNjIuNzg0LDY4LjkxOXogTTgwLjI1Miw4MS45NzYNCgkJYy0wLjc2NCwwLjkwMy0xLjg2OSwxLjQ0NS0zLjA1MiwxLjQ5NWMtMC4wNTgsMC4wMDItMC4xMTcsMC4wMDQtMC4xNzcsMC4wMDRjLTEuMTE5LDAtMi4xOTMtMC40NDItMi45ODgtMS4yMzdsLTAuNTU1LTAuNTU1DQoJCWMtMS41NTEtMS41NS0xLjY1Ni00LjAyOS0wLjI0Ni01LjcwN2M2LjgxNC04LjEwNCwxMC41NjgtMTguMzk2LDEwLjU2OC0yOC45ODJjMC0xMS4wMTEtNC4wMTktMjEuNjExLTExLjMxNC0yOS44NDcNCgkJYy0xLjQ3OS0xLjY3Mi0xLjQwNC00LjIwMywwLjE3LTUuNzgzbDAuNTU0LTAuNTU1YzAuODIyLTAuODI2LDEuODktMS4yODEsMy4xMTUtMS4yNDJjMS4xNjMsMC4wMzMsMi4yNjMsMC41NDcsMy4wMzYsMS40MTcNCgkJYzguODE4LDkuOTI4LDEzLjY3NSwyMi43MTgsMTMuNjc1LDM2LjAxQzkzLjA0LDU5Ljc4Myw4OC40OTksNzIuMjA3LDgwLjI1Miw4MS45NzZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="),
              (w.volume = u))
            : ((u = t),
              (document.querySelector("#image-mute").src = g),
              (w.volume = u));
        }),
      document
        .querySelector("#pause-play")
        .addEventListener("click", function () {
          j
            ? ((document.querySelector("#image-play").src = C),
              w.pause(),
              (j = !1))
            : ((document.querySelector("#image-play").src =
                "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwDQoJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+DQoJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzENCgkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="),
              w.play(),
              (j = !0));
        }),
      document
        .querySelector("#next-video")
        .addEventListener("click", function () {
          (document.querySelector("#image-play").src = C),
            (document.querySelector("#image-mute").src = g),
            (w.src = i != n.length - 1 ? n[++i] : n[0]);
        }),
      document
        .querySelector("#prev-video")
        .addEventListener("click", function () {
          (document.querySelector("#image-play").src = C),
            (document.querySelector("#image-mute").src = g),
            (w.src = 0 != i ? n[--i] : n[n.length - 1]);
        });
    var y = document.querySelector("#tv-options"),
      I = document.querySelector("#tv-brand"),
      r = document.querySelector("#tv-model"),
      d = document.querySelector("#tv-resolution"),
      T = document.querySelector("#tv-aspect-ratio"),
      s = document.querySelector("#tv-size");
    document
      .querySelector("#select-btn")
      .addEventListener("click", function () {
        switch (((c = w.classList.item(0)), y.selectedIndex)) {
          case 0:
            l(D), w.classList.replace(c, "lg-tv"), (w.width = 550);
            break;
          case 1:
            l(o), w.classList.replace(c, "sg-tv"), (w.width = 430);
            break;
          case 2:
            l(z), w.classList.replace(c, "mi-tv"), (w.width = 490);
        }
      });
    var l = function (M) {
      (I.innerText = M.getBrand()),
        (r.innerText = M.getModel()),
        (d.innerText = M.getResolution()),
        (T.innerText = M.getAspectRatio()),
        (s.innerText = M.getSize());
    };
  },
  function (M, e, L) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.Tv = void 0);
    var t = (function () {
      function M(M, e, L, t, c) {
        (this.model = e),
          (this.brand = M),
          (this.resolution = L),
          (this.aspectRatio = t),
          (this.size = c);
      }
      return (
        (M.prototype.getModel = function () {
          return this.model;
        }),
        (M.prototype.getBrand = function () {
          return this.brand;
        }),
        (M.prototype.getResolution = function () {
          return this.resolution;
        }),
        (M.prototype.getAspectRatio = function () {
          return this.aspectRatio;
        }),
        (M.prototype.getSize = function () {
          return this.size;
        }),
        M
      );
    })();
    e.Tv = t;
  },
]);
