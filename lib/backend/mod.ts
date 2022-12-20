import { calculateFrameDeltaFromFps } from "sorse/misc";
import { SorseGameConstructorOptions } from "sorse/types";

export let canvas: HTMLCanvasElement;
export let context: CanvasRenderingContext2D;
export let targetFrameRate: number;

let lastRenderTimestamp = Date.now();
const last20SecondFps: number[] = [0];

setInterval(() => {
	last20SecondFps.unshift(0);
	if (last20SecondFps.length > 10) {
		last20SecondFps.pop();
	}
}, 1000);

const frameLoop = () => {
	requestAnimationFrame(frameLoop);
	const frameDelta = calculateFrameDeltaFromFps(targetFrameRate);
	const currentTimestamp = Date.now();
	const delta = currentTimestamp - lastRenderTimestamp;

	if (delta >= frameDelta) {
		lastRenderTimestamp = currentTimestamp;
		last20SecondFps[0]++;
		context.clearRect(0, 0, canvas.width, canvas.height);
	}
};

export function init(options: SorseGameConstructorOptions) {
	targetFrameRate = options.targetFrameRate;
	canvas = document.getElementById("sorse-canvas") as HTMLCanvasElement;
	context = canvas.getContext("2d") as CanvasRenderingContext2D;

	if (context == undefined) {
		alert("[Sorse] Failed to get canvas context! Please update your browser.");
		throw new Error("Failed to get canvas context");
	}

	context.imageSmoothingEnabled = false;
	
}
