const g = function () {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
	new MutationObserver((n) => {
		for (const i of n)
			if (i.type === "childList")
				for (const s of i.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function r(n) {
		const i = {};
		return (
			n.integrity && (i.integrity = n.integrity),
			n.referrerpolicy && (i.referrerPolicy = n.referrerpolicy),
			n.crossorigin === "use-credentials"
				? (i.credentials = "include")
				: n.crossorigin === "anonymous"
				? (i.credentials = "omit")
				: (i.credentials = "same-origin"),
			i
		);
	}
	function o(n) {
		if (n.ep) return;
		n.ep = !0;
		const i = r(n);
		fetch(n.href, i);
	}
};
g();
function h({ children: t }) {
	if (t == null) throw new Error("Head element requires children");
	for (const e of t) {
		if (e == null) throw new Error("Head element requires children");
		document.head.appendChild(e);
	}
	return f.f;
}
const c = class {
	static get f() {
		return document.createDocumentFragment();
	}
	static page({ title: t = "WaveJS Page" }, e) {
		if (e == null) throw new Error("Page does not have render function");
		c.renderPage(e, t);
	}
	static renderPage(t, e, r) {
		this.currentPage = { page: t, title: e, props: r != null ? r : void 0 };
		const o =
			t instanceof HTMLElement ||
			t instanceof DocumentFragment ||
			typeof t == "string"
				? t
				: t(r);
		(document.getElementById("app").innerHTML = ""),
			document.title != e && (document.title = e),
			!(o instanceof HTMLElement) && !(o instanceof DocumentFragment)
				? (document.getElementById("app").innerHTML = o)
				: document.getElementById("app").appendChild(o);
	}
	static css(t, e) {
		let r = "";
		for (const o in e) {
			const n = e[o];
			(o.toLowerCase() == "always" || t[o] == !0) && (r += ` ${n}`);
		}
		return r.substring(1);
	}
	static h(t, e, ...r) {
		var o;
		if (typeof t != "string" && !(t instanceof DocumentFragment))
			return t(e != null ? e : { children: r });
		{
			if (t == "head") return h({ children: r });
			const n = c.convertNameToElement(t);
			if (
				(e == null && (e = { children: void 0 }),
				n instanceof HTMLElement || n instanceof SVGElement)
			) {
				for (const s in e)
					if (s != "children")
						if (s.startsWith("on"))
							n.addEventListener(s.substring(2).toLowerCase(), e[s]);
						else {
							if (s === "style" && typeof e[s] != "string") {
								let a = "";
								for (const u in e[s]) {
									let p = "";
									for (const d of u.split(""))
										d.toLowerCase() == d
											? (p += d)
											: (p += `-${d.toLowerCase()}`);
									a += `${p}: ${e.style[u]};`;
								}
								e[s] = a;
							}
							if (["class", "classname"].includes(s.toLowerCase())) {
								const a = (o = n.getAttribute("class")) != null ? o : "";
								n.setAttribute("class", a + `${a == "" ? "" : " "}${e[s]}`);
								continue;
							}
							n.setAttribute(s, e[s]);
						}
			}
			const i = (s, a) => {
				if (a != null)
					if (Array.isArray(a)) for (const u of a) i(s, u);
					else
						typeof a == "string"
							? t == "raw"
								? (n.innerHTML += a)
								: s.appendChild(document.createTextNode(a))
							: a instanceof Node
							? s.appendChild(a)
							: typeof a != "boolean" &&
							  s.appendChild(document.createTextNode(String(a)));
			};
			for (const s of r) i(n, s);
			return n;
		}
	}
	static isNamespaceElement(t) {
		return c.svgTypes.includes(t);
	}
	static convertNameToElement(t) {
		return t == "raw"
			? document.createElement("div")
			: t instanceof DocumentFragment
			? t
			: c.isNamespaceElement(t)
			? document.createElementNS("http://www.w3.org/2000/svg", t)
			: document.createElement(t);
	}
};
let f = c;
f.svgTypes = [
	"svg",
	"animate",
	"animateMotion",
	"animateTransform",
	"circle",
	"clipPath",
	"defs",
	"desc",
	"ellipse",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"filter",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"marker",
	"mask",
	"metadata",
	"mpath",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"script",
	"set",
	"stop",
	"style",
	"svg",
	"switch",
	"symbol",
	"text",
	"textPath",
	"title",
	"tspan",
	"use",
	"view",
];
f.currentPage = { title: "WaveJS Page", page: () => "" };
f.stateNumber = -1;
f.states = [];
f.useState = (t) => {
	c.stateNumber += 1;
	const e = new Number(c.stateNumber);
	return (
		c.states[e] === void 0 && (c.states[e] = t),
		[
			c.states[e],
			(r) => {
				(c.states[e] = r), (c.stateNumber = -1);
				const { page: o, title: n, props: i } = c.currentPage;
				c.renderPage(o, n, i != null ? i : void 0);
			},
		]
	);
};
f.useSessionState = (t) => [() => t, (e) => (t = e)];
let l = { routes: { home: { title: "Home", component: "" } }, options: {} };
class m {
	static create(e, r) {
		let o = { home: { title: "Home", component: "" } };
		for (let n in e) o[n.toLowerCase()] = e[n];
		return (
			(l = { routes: o, options: r }),
			m.reroutePage(),
			(window.onhashchange = () => m.reroutePage()),
			this
		);
	}
	static addRoute(e, r, o = !1) {
		return l.routes[e.toLowerCase()] && !o
			? this
			: ((l.routes[e.toLowerCase()] = r), this);
	}
	static removeRoute(e) {
		if (e === "home") throw new Error("Cannot remove home route");
		return l.routes[e] && delete l.routes[e], this;
	}
	static reroutePage(
		e = location.hash.substring(location.hash.startsWith("#") ? 1 : 0)
	) {
		if (((f.states = []), (e = e.toLowerCase()), e === ""))
			return this.reroutePage("home");
		l.routes[e] != null ? this.renderPage(e) : this.renderPage("404");
	}
	static renderPage(e) {
		var n, i, s;
		const { component: r, title: o } =
			(i = (n = l.routes[e]) != null ? n : l.routes["404"]) != null
				? i
				: { component: "404", title: "404" };
		(s = l.options) != null && s.wrapper
			? f.renderPage(l.options.wrapper, o != null ? o : "WaveJS App", {
					children: typeof r != "string" ? r : () => r,
			  })
			: f.renderPage(
					typeof r != "string" ? r : () => r,
					o != null ? o : "WaveJS App"
			  );
	}
}
const v = { HashRouter: m };
function y() {
	return f.h(f.f, null);
}
v.HashRouter.create({ home: { title: "sorse Docs", component: y } });
