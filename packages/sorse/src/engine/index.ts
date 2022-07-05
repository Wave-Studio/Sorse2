/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	type InitOptions,
	type ShapeReturn,
	type Font,
	Position,
	ShapeType,
	Container,
	ClickType,
} from "../index";

import { HookData } from "./methods/hooks/lib";

export class Sorse {
	private static isPastSplash = false;
	private static canvas: HTMLCanvasElement;
	private static context: CanvasRenderingContext2D;
	private static gameScaleFactorWidth: number;
	private static gameScaleFactorHeight: number;
	private static opts: InitOptions;
	private static width: number;
	private static height: number;
	private static continueRender = true;

	static get scaleFactorHeight() {
		return this.gameScaleFactorHeight;
	}

	static get scaleFactorWidth() {
		return this.gameScaleFactorWidth;
	}

	static get nativeWidth() {
		return this.width;
	}

	static get nativeHeight() {
		return this.height;
	}

	static get renderedWidth() {
		return this.width * this.gameScaleFactorWidth;
	}

	static get renderedHeight() {
		return this.height * this.gameScaleFactorHeight;
	}

	// None of this shit makes any sense - Blocks

	private static startRenderLoop() {
		if (!this.isPastSplash) return;
		const frameLoop = async () => {
			if (this.continueRender) {
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
				await this.render();
				requestAnimationFrame(frameLoop);
			}
		};

		requestAnimationFrame(frameLoop);
	}

	private static async render() {
		HookData.hookIndex = -1;
		const res = this.opts.component(
			Date.now() - HookData.lastRender,
			HookData.renderedFrame
		);
		HookData.clicks = [];
		HookData.renderedFrame++;
		HookData.last10FrameCounts[0]++;
		HookData.lastRender = Date.now();
		await this.renderFromJSON(res);
	}

	private static playSplash() {
		if (this.isPastSplash) {
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
					this.isPastSplash = true;

					// Event listeners

					const updateValues = ({ pageX, pageY }: MouseEvent) => {
						HookData.mouseX = pageX - this.canvas.offsetLeft;
						HookData.mouseY = pageY - this.canvas.offsetTop;
					};

					const convertKey = (key: string) => {
						return key == " " ? "SPACE" : key.toUpperCase();
					};

					this.canvas.addEventListener("mousemove", updateValues);
					this.canvas.addEventListener("mouseenter", updateValues);
					this.canvas.addEventListener("mouseleave", updateValues);
					this.canvas.addEventListener("click", (e) => {
						let key = e.button ?? e.which;

						// Legacy compatibility
						if (e.button != undefined) {
							key++;
						}

						const { x, y } = {
							x: e.clientX - this.canvas.getBoundingClientRect().left,
							y: e.clientY - this.canvas.getBoundingClientRect().top,
						};
						HookData.clicks.push({
							pos: new Position(x, y),
							type:
								{
									0: ClickType.Unknown,
									1: ClickType.Left,
									2: ClickType.Middle,
									3: ClickType.Right,
								}[(key ?? 0) as 0 | 1 | 2 | 3] ?? ClickType.Unknown,
						});
					});

					addEventListener("contextmenu", (e) => {
						e.preventDefault();
						e.stopPropagation();
						return false;
					});

					navigator.mediaSession.metadata = new MediaMetadata({});

					for (const action of [
						"play",
						"pause",
						"stop",
						"seekbackward",
						"seekforward",
						"seekto",
						"previoustrack",
						"nexttrack",
					] as MediaSessionAction[]) {
						navigator.mediaSession.setActionHandler(action, () => {});
					}

					addEventListener("keyup", (e) => {
						const key = convertKey(e.key);
						if (!HookData.pressedKeys.includes(key)) {
							HookData.pressedKeys.push(key);
						}
					});

					addEventListener("keydown", (e) => {
						const key = convertKey(e.key);
						HookData.pressedKeys = HookData.pressedKeys.filter((k: string) => k != key);
					});

					HookData.last10FrameCounts[0] = 0;

					setInterval(() => {
						HookData.last10FrameCounts.unshift(0);
						if (HookData.last10FrameCounts.length > 10) {
							HookData.last10FrameCounts.pop();
						}
					}, 1000);

					// TODO: Error handler

					this.startRenderLoop();
				};

				if (state === "suspended") {
					const ctx = this.context;
					ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
					ctx.fillStyle = "black";
					ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
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

		if (opts.canvas.scaleTo != undefined) {
			this.gameScaleFactorWidth =
				opts.canvas.scaleTo.width / opts.canvas.nativeSize.width;
			this.gameScaleFactorHeight =
				opts.canvas.scaleTo.height / opts.canvas.nativeSize.height;
		} else {
			this.gameScaleFactorHeight = 1;
			this.gameScaleFactorWidth = 1;
		}

		cacheDiv.id = "sorse-cache";
		cacheDiv.style.display = "none";
		document.body.appendChild(cacheDiv);
		canvas.width = opts.canvas.scaleTo?.width ?? opts.canvas.nativeSize.width;
		canvas.height =
			opts.canvas.scaleTo?.height ?? opts.canvas.nativeSize.height;

		if (context == null) {
			throw new Error("Canvas context is null");
		} else {
			this.canvas = canvas;
			this.context = context;
			this.opts = opts;
			this.width = opts.canvas.nativeSize.width;
			this.height = opts.canvas.nativeSize.height;
			this.playSplash();
		}
	}

	public static createLinearGradient(pos1: Position, pos2: Position) {
		return this.context.createLinearGradient(pos1.x, pos1.y, pos2.x, pos2.y);
	}

	public static createRadialGradient(
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

	public static createPattern(image: CanvasImageSource, repetition?: string) {
		return this.context.createPattern(image, repetition ?? null);
	}

	// JSX aspect of Sorse
	public static get f() {
		return "fragment";
	}

	public static h(
		tagName: "fragment" | ((props: Record<string, unknown>) => ShapeReturn),
		props: Record<string, unknown>,
		...children: ShapeReturn[]
	): ShapeReturn {
		if (tagName == "fragment") {
			tagName = Container;
		}

		return (tagName as (props: Record<string, unknown>) => ShapeReturn)({
			...props,
			children: children ?? [],
		});
	}

	// Render engine
	private static async renderFromJSON(
		shape: ShapeReturn,
		positionOffset: Position = new Position(0, 0),
		renderRestOfTree = true
	) {
		this.context.fillStyle = "black";
		this.context.strokeStyle = "black";
		this.context.lineWidth = 1;
		shape.pos = shape.pos ?? new Position(0, 0);

		const offset = new Position(
			positionOffset.x + (shape.offset?.x ?? 0),
			positionOffset.y + (shape.offset?.y ?? 0)
		);
		const drawPosition = new Position(
			offset.x + (shape.pos.x ?? (shape.start as Position | undefined)?.x ?? 0),
			offset.y + (shape.pos.y ?? (shape.start as Position | undefined)?.y ?? 0)
		);
		const visible = shape.visible && renderRestOfTree && true;

		if (shape.type != ShapeType.Container) {
			this.context.fillStyle =
				(shape.color as string | CanvasPattern | CanvasGradient | undefined) ??
				"black";

			if (shape.border != undefined) {
				const { color, width } = shape.border as {
					color: string | CanvasPattern | CanvasGradient;
					width: number;
				};
				this.context.strokeStyle = color;
				this.context.lineWidth = width;
			}

			if (shape.type == ShapeType.Rectangle) {
				const width = shape.width as number;
				const height = shape.height as number;
				this.context.fillRect(
					drawPosition.x,
					drawPosition.y,
					width * this.gameScaleFactorWidth,
					height * this.gameScaleFactorHeight
				);
				if (shape.border != undefined) {
					this.context.strokeRect(
						drawPosition.x,
						drawPosition.y,
						width * this.gameScaleFactorWidth,
						height * this.gameScaleFactorHeight
					);
				}
			} else if (shape.type == ShapeType.Polygon) {
				this.context.save();
				this.context.moveTo(drawPosition.x, drawPosition.y);
				this.context.beginPath();
				for (const point of shape.points as Position[]) {
					this.context.lineTo(
						drawPosition.x + point.x,
						drawPosition.y + point.y
					);
				}
				this.context.moveTo(drawPosition.x, drawPosition.y);
				this.context.closePath();
				this.context.fill();
				if (shape.border != undefined) {
					this.context.stroke();
				}
				this.context.restore();
			} else if (shape.type == ShapeType.Circle) {
				const radius = shape.radius as number;
				this.context.arc(
					drawPosition.x,
					drawPosition.y,
					radius,
					0,
					2 * Math.PI
				);
				this.context.fill();
				if (shape.border != undefined) {
					this.context.stroke();
				}
			} else if (shape.type == ShapeType.Line) {
				const start = shape.start as Position;
				const end = shape.end as Position;
				this.context.moveTo(drawPosition.x + start.x, drawPosition.y + start.y);
				this.context.beginPath();
				this.context.lineTo(drawPosition.x + end.x, drawPosition.y + end.y);
				this.context.closePath();
				this.context.stroke();
			} else if (shape.type == ShapeType.Text) {
				const text = shape.text as string;
				const font = shape.font as Font;
				const align = shape.align as CanvasTextAlign | undefined;
				const direction = shape.direction as CanvasDirection | undefined;
				this.context.font = font.font;
				this.context.textAlign = align ?? "left";
				this.context.direction = direction ?? "ltr";
				this.context.fillText(text, drawPosition.x, drawPosition.y);
				if (shape.border != undefined) {
					this.context.strokeText(text, drawPosition.x, drawPosition.y);
				}
			} else if (shape.type == ShapeType.Image) {
				const image = shape.image as CanvasImageSource | string;
				const width = shape.width as number | undefined;
				const height = shape.height as number | undefined;
				const imageSource =
					typeof image == "string"
						? ((await new Promise((resolve, reject) => {
								if (document.getElementById(image) != null) {
									resolve(document.getElementById(image) as HTMLImageElement);
								} else {
									const img = document.createElement("img");
									img.onload = () => {
										document.getElementById("sorse-cache")!.appendChild(img);
										resolve(img);
									};
									img.onerror = () =>
										reject(new Error("Failed to load image " + image));
									img.id = image;
									img.src = image;
								}
						  })) as HTMLImageElement)
						: image;

				if (width != undefined && height != undefined) {
					this.context.drawImage(
						imageSource,
						drawPosition.x,
						drawPosition.y,
						width * this.gameScaleFactorWidth,
						height * this.gameScaleFactorHeight
					);
				} else {
					this.context.drawImage(imageSource, drawPosition.x, drawPosition.y);
				}
			}
		}

		this.context.fillStyle = "black";
		this.context.strokeStyle = "black";
		this.context.lineWidth = 1;

		for (const child of shape.children ?? []) {
			await this.renderFromJSON(child, drawPosition, visible);
		}
	}
}
