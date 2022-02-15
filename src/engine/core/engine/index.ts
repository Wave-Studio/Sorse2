/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { GameOptions } from "../../index";

export class Sorse {
	private static cache: Map<string, HTMLImageElement | HTMLVideoElement> =
		new Map();
	private static canvas: HTMLCanvasElement;
	private static ctx: CanvasRenderingContext2D;
	private static isPastSplash = false;

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

	private static init(_opts: GameOptions) {
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
			Sorse.ctx.clearRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
			Sorse.ctx.fillStyle = "black";
			Sorse.ctx.fillRect(0, 0, Sorse.canvas.width, Sorse.canvas.height);
		})
	}

	public static reRenderScreen() {

	}
}
