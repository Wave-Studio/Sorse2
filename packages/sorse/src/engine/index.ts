/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { InitOpts } from "../index";

export class Sorse {
	private static pastSplash = false;
	private static canvas: HTMLCanvasElement;
	private static context: CanvasRenderingContext2D;

	constructor(opts: InitOpts) {
		const canvas = Sorse.canvas = document.createElement("canvas");
		Sorse.context = canvas.getContext("2d");

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

		Sorse.init(opts);
	}

	// Bri'ish people be like
	private static init(opts: InitOpts) {
		// No cdn workaround be like
		const splashFile =
			"https://cdn.discordapp.com/attachments/722942034549407775/952321187889946624/splash.ogv";
		const assetDiv = document.createElement("div");
		assetDiv.style.display = "none";
		document.body.appendChild(assetDiv);
		const splash = document.createElement("video");
		splash.src = splashFile;

		const startSplash = () => {
			splash.play();
			const videoLoop = () => {
				if (splash && !splash.paused && !splash.ended) {
					this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
		}

		splash.addEventListener("loadeddata", () => {
			const context = new AudioContext();
			if (context.state == "suspended") {
				const listener = () => {
					this.canvas.removeEventListener("click", listener);
					startSplash();
				};
				this.canvas.addEventListener("click", listener);
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.context.fillStyle = "white";
				this.context.font = "30px Arial";
				this.context.fillText("Click to play", this.canvas.width / 2 - 100, this.canvas.height / 2);
			} else {
				startSplash();
			}
		});
	}
}
