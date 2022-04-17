/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { InitOpts, SorseEvents } from "../index";

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

	constructor(opts: InitOpts) {
		const canvas = (Sorse.canvas = document.createElement("canvas"));
		canvas.id = "sorse-canvas";
		canvas.width = 1080;
		canvas.height = 720;
		Sorse.context = canvas.getContext("2d")!;

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

		Sorse.on("ready", () => {
			for (const Plugin of opts.plugins ?? []) {
				try {
					Plugin.onInit(Sorse);
				} catch (e) {
					console.error(new Error(`Plugin ${Plugin.name} failed to load! Below is a stacktrace`));
					// @ts-ignore
					console.error(new Error(e));
					continue;
				}
				Sorse.pluginData.push({
					...Plugin,
				});
			}

			Sorse.emit("debug", "Sorse plugins loaded", Sorse.pluginData);
		});

		Sorse.on("stateChange", () => {
			Sorse.emit("render");
		});

		Sorse.on("render", () => {
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
			try {
				func(...data);
			} catch {
				continue;
			}
		}
	}

	static on<T extends keyof SorseEvents>(event: T, callback: SorseEvents[T]) {
		const events = this.events.get(event) ?? [];
		// @ts-ignore
		events.push(callback);
		this.events.set(event, events);
	}
}
