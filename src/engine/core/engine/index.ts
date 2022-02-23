/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	GameOptions,
	SorseDefaultEvents as SorseEvents,
	Scene,
} from "../../index";

export class Sorse {
	private static cache: Map<string, HTMLImageElement | HTMLVideoElement> =
		new Map();
	private static sorseEvents: Map<string, ((...args: unknown[]) => void)[]> =
		new Map();
	private static canvas: HTMLCanvasElement;
	private static ctx: CanvasRenderingContext2D;
	private static isPastSplash = false;
	private static GameScenes: Scene[] = [];

	constructor(
		opts: GameOptions,
		c: HTMLCanvasElement,
		context: CanvasRenderingContext2D
	) {
		Sorse.canvas = c;
		Sorse.ctx = context;
		context.fillStyle = "black";
		context.fillRect(0, 0, c.width, c.height);
		const cachediv = document.createElement("div");
		cachediv.style.display = "none";
		cachediv.id = "sorse-cache";
		document.body.appendChild(cachediv);
		Sorse.init(opts);
	}

	private static getCachedElement(
		url: string,
		type: "image" | "video"
	): HTMLImageElement | HTMLVideoElement {
		if (this.cache.has(url)) {
			return this.cache.get(url)!;
		} else {
			let element: HTMLImageElement | HTMLVideoElement;
			if (type == "image") {
				element = document.createElement("img");
			} else {
				element = document.createElement("video");
			}
			element.id = `sorse-cache-${url}`;
			element.style.display = "none";
			element.src = url;
			document.getElementById("sorse-cache")!.appendChild(element);
			return element;
		}
	}

	private static init(opts: GameOptions) {
		if (this.isPastSplash == true)
			throw new Error(
				"Unsupported API use detected, Please check for multiple instances of sorse"
			);
		const video = this.getCachedElement(
			"/splash.ogv",
			"video"
		) as HTMLVideoElement;
		video.addEventListener("loadeddata", () => {
			video.play();
			const videoLoop = () => {
				if (video && !video.paused && !video.ended) {
					Sorse.ctx.clearRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
					Sorse.ctx.drawImage(
						video,
						0,
						0,
						Sorse.canvas.width,
						Sorse.canvas.height
					);
					requestAnimationFrame(videoLoop);
				}
			};
			requestAnimationFrame(videoLoop);
		});
		video.addEventListener("ended", () => {
			video.pause();
			this.isPastSplash = true;

			for (const scene of opts.scenes) {
				const SorseScene: typeof Scene = scene;
				const sceneInstance = new SorseScene();
				sceneInstance.onInit?.();
				this.GameScenes.push(sceneInstance);
			}

			Sorse.ctx.clearRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
			Sorse.ctx.fillStyle = "black";
			Sorse.ctx.fillRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
			this.emit("ready");
		});
	}

	public static async emitBulk(
		events: [SorseEvents, ...unknown[]][]
	): Promise<boolean[]>;
	/** Returns true if all events got event, false if not */
	public static async emitBulk(
		events: [string, ...unknown[]][]
	): Promise<boolean[]> {
		const returnResults: boolean[] = [];

		for (const event of events) {
			const eventName = event[0];
			const args = event.slice(1);
			// Ts being stupid
			const result = await this.emit(eventName as SorseEvents, ...args);
			returnResults.push(result);
		}

		return returnResults;
	}

	/** Returns true if all events got event, false if not */
	public static async emit(
		eventName: SorseEvents,
		...args: unknown[]
	): Promise<boolean>;
	/** Returns true if all events got event, false if not */
	public static async emit(
		eventName: string,
		...args: unknown[]
	): Promise<boolean> {
		if (this.isPastSplash == false) return false;
		const events = this.sorseEvents.get(eventName) ?? [];
		for (const event of events) {
			const result = await event(...args);
			if (typeof result == "boolean") {
				if (result == false) {
					return false;
				}
			}
		}
		return true;
	}

	public static event(eventName: SorseEvents) {
		return (func: (...args: unknown[]) => void) => {
			const events = this.sorseEvents.get(eventName) ?? [];
			events.push(func);
			this.sorseEvents.set(eventName, events);
		};
	}
}
