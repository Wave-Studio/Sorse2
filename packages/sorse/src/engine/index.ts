/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	type InitOptions,
	Position,
	type ShapeReturn,
	ShapeType,
} from "../index";
import { Container } from "./methods/jsx";

export class Sorse {
	private static isPastSplash = false;
	private static canvas: HTMLCanvasElement;
	private static context: CanvasRenderingContext2D;
	private static cacheDiv: HTMLDivElement;

	// None of this shit makes any sense - Blocks

	private static playSplash() {
		if (Sorse.isPastSplash) {
			return;
		} else {
			const splash = document.createElement("video");
			// No cdn moment
			splash.src =
				"https://cdn.discordapp.com/attachments/722942034549407775/952321187889946624/splash.ogv";
			splash.onloadeddata = () => {
				const { state } = new AudioContext();
				const playSplash = () => {
					this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
					splash.play();
					const frameLoop = () => {
						if (!splash.ended) {
							this.context.clearRect(
								0,
								0,
								this.canvas.width,
								this.canvas.height
							);
							this.context.drawImage(
								splash,
								0,
								0,
								this.canvas.width,
								this.canvas.height
							);
						} else {
							postSplash();
						}
						requestAnimationFrame(frameLoop);
					};

					requestAnimationFrame(frameLoop);
				};

				const postSplash = () => {
					Sorse.isPastSplash = true;
				};

				if (state === "suspended") {
					const ctx = this.context;
					ctx.clearRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
					ctx.fillStyle = "black";
					ctx.fillRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
					ctx.fillStyle = "white";
					ctx.font = "50px Arial";
					this.context.fillText(
						"Click to play",
						this.canvas.width / 2 - 150,
						this.canvas.height / 2
					);
					this.canvas.onclick = () => {
						this.canvas.onclick = null;
						playSplash();
					};
				} else {
					for (const uri of ["localhost", "127.0.0.1"]) {
						if (location.hostname.toLowerCase() === uri.toLowerCase()) {
							postSplash();
							return;
						}
					}
					playSplash();
				}
			};
		}
	}

	public static init(opts: InitOptions) {
		const canvas =
			document.getElementById("sorse") != undefined
				? (document.getElementById("sorse") as HTMLCanvasElement)
				: (() => {
						const canvas = document.createElement("canvas");
						canvas.id = "sorse";
						document.body.appendChild(canvas);
						return canvas;
				  })();
		const context = canvas.getContext("2d");
		const cacheDiv = document.createElement("div");

		cacheDiv.id = "sorse-cache";
		cacheDiv.style.display = "none";
		document.body.appendChild(cacheDiv);
		canvas.width = opts.canvas.scaleTo?.width ?? opts.canvas.nativeSize.width;
		canvas.height =
			opts.canvas.scaleTo?.height ?? opts.canvas.nativeSize.height;

		if (context == null) {
			throw new Error("Canvas context is null");
		} else {
			Sorse.canvas = canvas;
			Sorse.context = context;
			Sorse.cacheDiv = cacheDiv;
			Sorse.playSplash();
		}
	}

	static createLinearGradient(pos1: Position, pos2: Position) {
		return this.context.createLinearGradient(pos1.x, pos1.y, pos2.x, pos2.y);
	}

	static createRadialGradient(
		pos1: Position,
		radius1: number,
		pos2: Position,
		radius2: number
	) {
		return this.context.createRadialGradient(
			pos1.x,
			pos1.y,
			radius1,
			pos2.x,
			pos2.y,
			radius2
		);
	}

	static createPattern(image: CanvasImageSource, repetition?: string) {
		return this.context.createPattern(image, repetition ?? null);
	}

	static async loadRemoteFont(name: string, remoteURL: string) {
		await new FontFace(name, `url(${remoteURL})`).load();
	}

	// JSX aspect of Sorse
	static f() {
		return "fragment";
	}

	static h(
		tagName: "fragment" | ((props: Record<string, unknown>) => ShapeReturn),
		props: Record<string, unknown>,
		...children: ShapeReturn[]
	): ShapeReturn {
		if (tagName == "fragment") {
			tagName = Container;
		}

		return (tagName as (props: Record<string, unknown>) => ShapeReturn)({
			...props,
			children,
		});
	}

	// TODO: This.

	// Render engine
	private static renderFromJSON(
		shapes: ShapeReturn,
		positionOffset: Position = new Position(0, 0),
		renderTree: boolean = true
	) {
		if (shapes.type === ShapeType.Container) {
			const { children, visible, offset } = shapes;
			let newOffset = new Position(
				positionOffset.x + (offset?.x ?? 0),
				positionOffset.y + (offset?.y ?? 0)
			);
			for (const child of children) {
				this.renderFromJSON(child, newOffset, renderTree && visible && true);
			}
		} else {
			switch (shapes.type) {
				case ShapeType.Rectangle: {
				}
			}
		}
	}
}
