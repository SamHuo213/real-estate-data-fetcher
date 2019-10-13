/* eslint-disable strict */
/* eslint-disable no-new-func */
/* eslint-disable eqeqeq */
/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-sequences */
export var gReceiver_ = function(n) {
	function t(n, t) {
		return n << t | n >>> 32 - t
	}

	function e(n, t) {
		var e, r, o, i, u;
		return o = 2147483648 & n,
		i = 2147483648 & t,
		u = (1073741823 & n) + (1073741823 & t),
		(e = 1073741824 & n) & (r = 1073741824 & t) ? 2147483648 ^ u ^ o ^ i : e | r ? 1073741824 & u ? 3221225472 ^ u ^ o ^ i : 1073741824 ^ u ^ o ^ i : u ^ o ^ i
	}

	function r(n, r, o, i, u, f, c) {
		return n = e(n, e(e(function(n, t, e) {
			return n & t | ~n & e
		}(r, o, i), u), c)),
		e(t(n, f), r)
	}
	function o(n, r, o, i, u, f, c) {
		return n = e(n, e(e(function(n, t, e) {
			return n & e | t & ~e
		}(r, o, i), u), c)),
		e(t(n, f), r)
	}

	function i(n, r, o, i, u, f, c) {
		return n = e(n, e(e(function(n, t, e) {
			return n ^ t ^ e
		}(r, o, i), u), c)),
		e(t(n, f), r)
	}

	function u(n, r, o, i, u, f, c) {
		return n = e(n, e(e(function(n, t, e) {
			return t ^ (n | ~e)
		}(r, o, i), u), c)),
		e(t(n, f), r)
	}

	function f(n) {
		var t, e = "", r = "";
		for (t = 0; t <= 3; t++)
			e += (r = "0" + (n >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
		return e
	}

	var c, l, s, a, h, v, p, d, g, m = Array();

	for (m = function(n) {
		for (var t, e = n.length, r = e + 8, o = 16 * ((r - r % 64) / 64 + 1), i = Array(o - 1), u = 0, f = 0; f < e; )
			u = f % 4 * 8,
			i[t = (f - f % 4) / 4] = i[t] | n.charCodeAt(f) << u,
			f++;
		return u = f % 4 * 8,
		i[t = (f - f % 4) / 4] = i[t] | 128 << u,
		i[o - 2] = e << 3,
		i[o - 1] = e >>> 29,
		i
	}(n = function(n) {
		n = n.replace(/\r\n/g, "\n");
		for (var t = "", e = 0; e < n.length; e++) {
			var r = n.charCodeAt(e);
			r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
			t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
			t += String.fromCharCode(r >> 6 & 63 | 128),
			t += String.fromCharCode(63 & r | 128))
		}
		return t
	}(n)),
	v = 1732584193,
	p = 4023233417,
	d = 2562383102,
	g = 271733878,
	c = 0; c < m.length; c += 16)
		l = v,
		s = p,
		a = d,
		h = g,
		v = r(v, p, d, g, m[c + 0], 7, 3614090360),
		g = r(g, v, p, d, m[c + 1], 12, 3905402710),
		d = r(d, g, v, p, m[c + 2], 17, 606105819),
		p = r(p, d, g, v, m[c + 3], 22, 3250441966),
		v = r(v, p, d, g, m[c + 4], 7, 4118548399),
		g = r(g, v, p, d, m[c + 5], 12, 1200080426),
		d = r(d, g, v, p, m[c + 6], 17, 2821735955),
		p = r(p, d, g, v, m[c + 7], 22, 4249261313),
		v = r(v, p, d, g, m[c + 8], 7, 1770035416),
		g = r(g, v, p, d, m[c + 9], 12, 2336552879),
		d = r(d, g, v, p, m[c + 10], 17, 4294925233),
		p = r(p, d, g, v, m[c + 11], 22, 2304563134),
		v = r(v, p, d, g, m[c + 12], 7, 1804603682),
		g = r(g, v, p, d, m[c + 13], 12, 4254626195),
		d = r(d, g, v, p, m[c + 14], 17, 2792965006),
		v = o(v, p = r(p, d, g, v, m[c + 15], 22, 1236535329), d, g, m[c + 1], 5, 4129170786),
		g = o(g, v, p, d, m[c + 6], 9, 3225465664),
		d = o(d, g, v, p, m[c + 11], 14, 643717713),
		p = o(p, d, g, v, m[c + 0], 20, 3921069994),
		v = o(v, p, d, g, m[c + 5], 5, 3593408605),
		g = o(g, v, p, d, m[c + 10], 9, 38016083),
		d = o(d, g, v, p, m[c + 15], 14, 3634488961),
		p = o(p, d, g, v, m[c + 4], 20, 3889429448),
		v = o(v, p, d, g, m[c + 9], 5, 568446438),
		g = o(g, v, p, d, m[c + 14], 9, 3275163606),
		d = o(d, g, v, p, m[c + 3], 14, 4107603335),
		p = o(p, d, g, v, m[c + 8], 20, 1163531501),
		v = o(v, p, d, g, m[c + 13], 5, 2850285829),
		g = o(g, v, p, d, m[c + 2], 9, 4243563512),
		d = o(d, g, v, p, m[c + 7], 14, 1735328473),
		v = i(v, p = o(p, d, g, v, m[c + 12], 20, 2368359562), d, g, m[c + 5], 4, 4294588738),
		g = i(g, v, p, d, m[c + 8], 11, 2272392833),
		d = i(d, g, v, p, m[c + 11], 16, 1839030562),
		p = i(p, d, g, v, m[c + 14], 23, 4259657740),
		v = i(v, p, d, g, m[c + 1], 4, 2763975236),
		g = i(g, v, p, d, m[c + 4], 11, 1272893353),
		d = i(d, g, v, p, m[c + 7], 16, 4139469664),
		p = i(p, d, g, v, m[c + 10], 23, 3200236656),
		v = i(v, p, d, g, m[c + 13], 4, 681279174),
		g = i(g, v, p, d, m[c + 0], 11, 3936430074),
		d = i(d, g, v, p, m[c + 3], 16, 3572445317),
		p = i(p, d, g, v, m[c + 6], 23, 76029189),
		v = i(v, p, d, g, m[c + 9], 4, 3654602809),
		g = i(g, v, p, d, m[c + 12], 11, 3873151461),
		d = i(d, g, v, p, m[c + 15], 16, 530742520),
		v = u(v, p = i(p, d, g, v, m[c + 2], 23, 3299628645), d, g, m[c + 0], 6, 4096336452),
		g = u(g, v, p, d, m[c + 7], 10, 1126891415),
		d = u(d, g, v, p, m[c + 14], 15, 2878612391),
		p = u(p, d, g, v, m[c + 5], 21, 4237533241),
		v = u(v, p, d, g, m[c + 12], 6, 1700485571),
		g = u(g, v, p, d, m[c + 3], 10, 2399980690),
		d = u(d, g, v, p, m[c + 10], 15, 4293915773),
		p = u(p, d, g, v, m[c + 1], 21, 2240044497),
		v = u(v, p, d, g, m[c + 8], 6, 1873313359),
		g = u(g, v, p, d, m[c + 15], 10, 4264355552),
		d = u(d, g, v, p, m[c + 6], 15, 2734768916),
		p = u(p, d, g, v, m[c + 13], 21, 1309151649),
		v = u(v, p, d, g, m[c + 4], 6, 4149444226),
		g = u(g, v, p, d, m[c + 11], 10, 3174756917),
		d = u(d, g, v, p, m[c + 2], 15, 718787259),
		p = u(p, d, g, v, m[c + 9], 21, 3951481745),
		v = e(v, l),
		p = e(p, s),
		d = e(d, a),
		g = e(g, h);
	return (f(v) + f(p) + f(d) + f(g)).toLowerCase()
};

function gLazyLoader() {
	var n, t = document.querySelectorAll(".lazy");
	if ("IntersectionObserver"in window) {
		var e = new IntersectionObserver(function(n, t) {
			n.forEach(function(n) {
				if (n.isIntersecting) {
					var t = n.target;
					t.src = t.dataset.src,
					t.classList.remove("lazy"),
					e.unobserve(t)
				}
			})
		}
		);
		t.forEach(function(n) {
			e.observe(n)
		})
	} else {
		function r() {
			n && clearTimeout(n),
			n = setTimeout(function() {
				var n = window.pageYOffset;
				t.forEach(function(t) {
					t.offsetTop < window.innerHeight + n && (t.src = t.dataset.src,
					t.classList.remove("lazy"))
				}),
				0 == t.length && (document.removeEventListener("scroll", r),
				window.removeEventListener("resize", r),
				window.removeEventListener("orientationChange", r))
			}, 20)
		}
		document.addEventListener("scroll", r),
		window.addEventListener("resize", r),
		window.addEventListener("orientationChange", r)
	}
}

!function(n) {
	if ("object" == typeof exports && "undefined" != typeof module)
		module.exports = n();
	else if ("function" == typeof define && define.amd)
		define([], n);
	else {
		var t;
		"undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self),
		t.hull = n()
	}
}(function() {
	return function n(t, e, r) {
		function o(u, f) {
			if (!e[u]) {
				if (!t[u]) {
					var c = "function" == typeof require && require;
					if (!f && c)
						return c(u, !0);
					if (i)
						return i(u, !0);
					var l = new Error("Cannot find module '" + u + "'");
					throw l.code = "MODULE_NOT_FOUND",
					l
				}
				var s = e[u] = {
					exports: {}
				};
				t[u][0].call(s.exports, function(n) {
					var e = t[u][1][n];
					return o(e || n)
				}, s, s.exports, n, t, e, r)
			}
			return e[u].exports
		}
		for (var i = "function" == typeof require && require, u = 0; u < r.length; u++)
			o(r[u]);
		return o
	}({
		1: [function(n, t, e) {
			function r(n, t, e) {
				return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
			}
			t.exports = function(n) {
				var t;
				return upper = function(n) {
					for (var t = [], e = 0; e < n.length; e++) {
						for (; t.length >= 2 && r(t[t.length - 2], t[t.length - 1], n[e]) <= 0; )
							t.pop();
						t.push(n[e])
					}
					return t.pop(),
					t
				}(n),
				lower = function(n) {
					for (var t = n.reverse(), e = [], o = 0; o < t.length; o++) {
						for (; e.length >= 2 && r(e[e.length - 2], e[e.length - 1], t[o]) <= 0; )
							e.pop();
						e.push(t[o])
					}
					return e.pop(),
					e
				}(n),
				(t = lower.concat(upper)).push(n[0]),
				t
			}
		}
		, {}],
		2: [function(n, t, e) {
			t.exports = {
				toXy: function(n, t) {
					return void 0 === t ? n.slice() : n.map(function(n) {
						return new Function("pt","return [pt" + t[0] + ",pt" + t[1] + "];")(n)
					})
				},
				fromXy: function(n, t) {
					return void 0 === t ? n.slice() : n.map(function(n) {
						return new Function("pt","var o = {}; o" + t[0] + "= pt[0]; o" + t[1] + "= pt[1]; return o;")(n)
					})
				}
			}
		}
		, {}],
		3: [function(n, t, e) {
			function r(n, t) {
				this._cells = [],
				this._cellSize = t,
				n.forEach(function(n) {
					var t = this.point2CellXY(n)
					  , e = t[0]
					  , r = t[1];
					void 0 === this._cells[e] && (this._cells[e] = []),
					void 0 === this._cells[e][r] && (this._cells[e][r] = []),
					this._cells[e][r].push(n)
				}, this)
			}
			r.prototype = {
				cellPoints: function(n, t) {
					return void 0 !== this._cells[n] && void 0 !== this._cells[n][t] ? this._cells[n][t] : []
				},
				rangePoints: function(n) {
					for (var t = this.point2CellXY([n[0], n[1]]), e = this.point2CellXY([n[2], n[3]]), r = [], o = t[0]; o <= e[0]; o++)
						for (var i = t[1]; i <= e[1]; i++)
							r = r.concat(this.cellPoints(o, i));
					return r
				},
				removePoint: function(n) {
					for (var t, e = this.point2CellXY(n), r = this._cells[e[0]][e[1]], o = 0; o < r.length; o++)
						if (r[o][0] === n[0] && r[o][1] === n[1]) {
							t = o;
							break
						}
					return r.splice(t, 1),
					r
				},
				point2CellXY: function(n) {
					return [parseInt(n[0] / this._cellSize), parseInt(n[1] / this._cellSize)]
				},
				extendBbox: function(n, t) {
					return [n[0] - t * this._cellSize, n[1] - t * this._cellSize, n[2] + t * this._cellSize, n[3] + t * this._cellSize]
				}
			},
			t.exports = function(n, t) {
				return new r(n,t)
			}
		}
		, {}],
		4: [function(n, t, e) {
			"use strict";
			var r = n("./intersect.js")
			  , o = n("./grid.js")
			  , i = n("./format.js")
			  , u = n("./convex.js");
			function f(n, t) {
				return Math.pow(t[0] - n[0], 2) + Math.pow(t[1] - n[1], 2)
			}
			function c(n, t, e) {
				var r = [t[0] - n[0], t[1] - n[1]]
				  , o = [e[0] - n[0], e[1] - n[1]]
				  , i = f(n, t)
				  , u = f(n, e);
				return (r[0] * o[0] + r[1] * o[1]) / Math.sqrt(i * u)
			}
			function l(n, t) {
				for (var e = 0; e < t.length - 1; e++) {
					var o = [t[e], t[e + 1]];
					if (!(n[0][0] === o[0][0] && n[0][1] === o[0][1] || n[0][0] === o[1][0] && n[0][1] === o[1][1]) && r(n, o))
						return !0
				}
				return !1
			}
			function s(n) {
				return [Math.min(n[0][0], n[1][0]), Math.min(n[0][1], n[1][1]), Math.max(n[0][0], n[1][0]), Math.max(n[0][1], n[1][1])]
			}
			function a(n, t, e) {
				for (var r, o, i = null, u = h, f = h, s = 0; s < t.length; s++)
					r = c(n[0], n[1], t[s]),
					o = c(n[1], n[0], t[s]),
					r > u && o > f && !l([n[0], t[s]], e) && !l([n[1], t[s]], e) && (u = r,
					f = o,
					i = t[s]);
				return i
			}
			var h = Math.cos(90 / (180 / Math.PI))
			  , v = .6;
			t.exports = function(n, t, e) {
				var r, c, l, h, p, d, g, m = t || 20;
				return n.length < 4 ? n.slice() : (p = [(h = function(n) {
					for (var t = 1 / 0, e = 1 / 0, r = -1 / 0, o = -1 / 0, i = n.length - 1; i >= 0; i--)
						n[i][0] < t && (t = n[i][0]),
						n[i][1] < e && (e = n[i][1]),
						n[i][0] > r && (r = n[i][0]),
						n[i][1] > o && (o = n[i][1]);
					return [r - t, o - e]
				}(g = function(n) {
					return n.filter(function(n, t, e) {
						var r = e[t - 1];
						return 0 === t || !(r[0] === n[0] && r[1] === n[1])
					})
				}(function(n) {
					return n.sort(function(n, t) {
						return n[0] == t[0] ? n[1] - t[1] : n[0] - t[0]
					})
				}(i.toXy(n, e)))))[0] * v, h[1] * v],
				r = u(g),
				l = g.filter(function(n) {
					return r.indexOf(n) < 0
				}),
				d = Math.ceil(1 / (g.length / (h[0] * h[1]))),
				c = function n(t, e, r, o, i) {
					for (var u, c, l, h, v, p, d, g = !1, m = 0; m < t.length - 1; m++)
						if (c = (u = [t[m], t[m + 1]])[0].join() + "," + u[1].join(),
						!(f(u[0], u[1]) < e || !0 === i[c])) {
							l = 0,
							v = s(u);
							do {
								p = (v = o.extendBbox(v, l))[2] - v[0],
								d = v[3] - v[1],
								h = a(u, o.rangePoints(v), t),
								l++
							} while (null === h && (r[0] > p || r[1] > d));p >= r[0] && d >= r[1] && (i[c] = !0),
							null !== h && (t.splice(m + 1, 0, h),
							o.removePoint(h),
							g = !0)
						}
					return g ? n(t, e, r, o, i) : t
				}(r, Math.pow(m, 2), p, o(l, d), {}),
				i.fromXy(c, e))
			}
		}
		, {
			"./convex.js": 1,
			"./format.js": 2,
			"./grid.js": 3,
			"./intersect.js": 5
		}],
		5: [function(n, t, e) {
			function r(n, t, e, r, o, i) {
				var u = (i - t) * (e - n) - (r - t) * (o - n);
				return u > 0 || !(u < 0)
			}
			t.exports = function(n, t) {
				var e = n[0][0]
				  , o = n[0][1]
				  , i = n[1][0]
				  , u = n[1][1]
				  , f = t[0][0]
				  , c = t[0][1]
				  , l = t[1][0]
				  , s = t[1][1];
				return r(e, o, f, c, l, s) !== r(i, u, f, c, l, s) && r(e, o, i, u, f, c) !== r(e, o, i, u, l, s)
			}
		}
		, {}]
	}, {}, [4])(4)
});
