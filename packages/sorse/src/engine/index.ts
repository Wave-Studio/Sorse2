/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { InitOpts, SorseEvents, SorseSprite, SorseClickType } from "../index";

export class Sorse {
	private static pastSplash = false;
	private static canvas: HTMLCanvasElement;
	private static context: CanvasRenderingContext2D;
	private static events: Map<string, ((...args: unknown[]) => void)[]> =
		new Map();
	private static pluginData: {
		name: string;
		author: string;
		version: string;
		description: string;
	}[] = [];
	private static objectIds: string[] = [];
	private static idChars =
		"abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ-01234567890".split(
			""
		);

	static get id() {
		const generateId = (): string => {
			let str = "";

			for (const _ of new Array(20)) {
				str += `${
					this.idChars[Math.floor(Math.random() * this.idChars.length)]
				}`;
			}

			return this.objectIds.includes(str) ? generateId() : str;
		};

		const id = generateId();
		this.objectIds.push(id);
		return id;
	}

	static removeID(id: string) {
		this.objectIds.splice(this.objectIds.indexOf(id), 1);
	}

	constructor(opts: InitOpts) {
		const canvas = (Sorse.canvas = document.createElement("canvas"));
		canvas.id = "sorse-canvas";
		canvas.width = 1080;
		canvas.height = 720;
		Sorse.context = canvas.getContext("2d")!;
		let continueRender = true;

		window.onerror = (e, src, lineno, _colno, err) => {
			continueRender = false;
			Sorse.context.clearRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
			Sorse.context.fillStyle = "red";
			Sorse.context.fillRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
			Sorse.context.fillStyle = "white";
			Sorse.context.font = "Bold 30px Arial";
			Sorse.context.fillText("[Sorse] An error occured!", 10, 30);
			Sorse.context.fillText(
				"[Sorse] Please alert the game's developer",
				10,
				70
			);

			const errorData = {
				line: "?",
				file: "?",
				message: "?",
			};

			if (err != undefined) {
				errorData.message = err.message;
				errorData.line = lineno!.toString();
				errorData.file = src!;
			} else {
				errorData.message = e.toString() ?? "Unknown error - check console";
			}

			Sorse.context.fillText(
				"[Sorse] Error: " + `${errorData.file}:${errorData.line} - ${errorData.message}`,
				10,
				110,
				Sorse.canvas.width - 20
			);
			console.error(
				"[Sorse] An error occured and Sorse has been disabled to prevent further errors."
			);
			console.error(err ?? e);
		};

		window.oncontextmenu = () => {
			return false;
		};

		canvas.onclick = (e) => {
			const key = e.button ?? e.which;
			switch (key) {
				case 1:
					Sorse.emit("rawMouseClick", e.x, e.y, SorseClickType.Left);
					break;

				case 2:
					Sorse.emit("rawMouseClick", e.x, e.y, SorseClickType.Middle);
					break;

				case 3:
					Sorse.emit("rawMouseClick", e.x, e.y, SorseClickType.Right);
					break;

				default:
					Sorse.emit("rawMouseClick", e.x, e.y, SorseClickType.Unknown);
					break;
			}
		};

		window.onkeydown = (e) => {
			const key = e.key.toUpperCase();
			Sorse.emit("keyDown", key);
		};

		window.onkeyup = (e) => {
			const key = e.key.toUpperCase();
			Sorse.emit("keyUp", key);
		};

		if (Sorse.context == null) {
			throw new Error("Canvas not supported");
		}

		if (opts.canvas && opts.canvas.width) {
			if (opts.canvas.width == "screen") {
				canvas.style.width = "100%";
			} else {
				canvas.width = opts.canvas.width;
			}
		}

		if (opts.canvas && opts.canvas.height) {
			if (opts.canvas.height == "screen") {
				canvas.style.height = "100%";
			} else {
				canvas.height = opts.canvas.height;
			}
		}

		Sorse.on("ready", async () => {
			for (const Plugin of opts.plugins ?? []) {
				await Plugin.onInit(Sorse);
				Sorse.pluginData.push({
					...Plugin,
				});
			}

			Sorse.emit("debug", "Sorse plugins loaded", Sorse.pluginData);

			for (const Scene of opts.scenes ?? []) {
				try {
					await Scene.onInit(Sorse);
				} catch (e) {
					// @ts-expect-error it works
					window.onerror!(null, "Unknown", 0, 0, e);
				}
				const initSprites = async (sprites: SorseSprite[]) => {
					for (const sprite of sprites) {
						try {
							await sprite.onInit(Sorse);
						} catch (e) {
							// @ts-expect-error it works
							window.onerror!(null, "Unknown", 0, 0, e);
						}
						for (const shape of sprite.shapes) {
							if (shape instanceof SorseSprite) {
								initSprites([shape]);
							}
						}
					}
				};

				initSprites(Scene.sprites);
			}
		});

		Sorse.on("stateChange", () => {
			if (!continueRender) return;
			Sorse.emit("render");
		});

		Sorse.on("render", () => {
			if (!continueRender) return;
			Sorse.context.clearRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
			for (const scene of opts.scenes) {
				scene.render(Sorse.context);
			}
		});

		document.body.appendChild(canvas);
		Sorse.init();
	}

	// Bri'ish people be like
	private static init() {
		// No cdn workaround be like
		const splashFile =
			"https://cdn.discordapp.com/attachments/722942034549407775/952321187889946624/splash.ogv";
		const assetDiv = document.createElement("div");
		assetDiv.style.display = "none";
		document.body.appendChild(assetDiv);
		const splash = document.createElement("video");
		assetDiv.appendChild(splash);
		splash.src = splashFile;

		const startSplash = () => {
			splash.play();
			const videoLoop = () => {
				if (splash && !splash.paused && !splash.ended) {
					this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
					this.context.fillStyle = "black";
					this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
					this.context.drawImage(
						splash,
						0,
						0,
						this.canvas.width,
						this.canvas.height
					);
					requestAnimationFrame(videoLoop);
				}
			};
			requestAnimationFrame(videoLoop);
		};

		splash.addEventListener("loadeddata", () => {
			const state = new AudioContext().state;

			if (state === "suspended") {
				const listener = () => {
					this.canvas.removeEventListener("click", listener);
					startSplash();
				};
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.context.fillStyle = "black";
				this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
				this.context.fillStyle = "white";
				this.context.font = "50px Arial";
				this.context.fillText(
					"Click to play",
					this.canvas.width / 2 - 150,
					this.canvas.height / 2
				);
				this.canvas.addEventListener("click", listener);
			} else {
				startSplash();
			}
		});

		splash.addEventListener("ended", () => {
			Sorse.pastSplash = true;
			splash.remove();
			this.emitBulk(["ready"], ["render"]);
		});
	}

	static async emitBulk(
		...events: [keyof SorseEvents, ...unknown[]][]
	): Promise<void>;
	static async emitBulk(...events: [string, ...unknown[]][]): Promise<void> {
		for (const event of events) {
			await this.emit(event[0] as keyof SorseEvents, ...event.slice(1));
		}
	}

	static async emit(
		event: keyof SorseEvents,
		...data: unknown[]
	): Promise<void>;
	static async emit(event: string, ...data: unknown[]): Promise<void> {
		if (!this.pastSplash) return;
		for (const func of this.events.get(event) ?? []) {
			func(...data);
		}
	}

	static on<T extends keyof SorseEvents>(event: T, callback: SorseEvents[T]) {
		const events = this.events.get(event) ?? [];
		// @ts-ignore
		events.push(callback);
		this.events.set(event, events);
	}
}
