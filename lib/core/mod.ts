import { Size } from "sorse/misc";
import { init } from "sorse/backend";
import { SorseGameConstructorOptions } from "sorse/types";

export class SorseGame {
	constructor(options: SorseGameConstructorOptions) {
		const {
			parentDiv,
			targetScreenSize,
			supportedScreenSizes,
		} = options;
		
		let parent = document.getElementById(parentDiv ?? "");
		if (parent == undefined || !(parent instanceof HTMLDivElement)) {
			parent = document.body;
		}

		const sorseDiv = document.createElement("div");
		sorseDiv.id = "sorse-container";

		const sorseCanvas = document.createElement("canvas");
		sorseCanvas.id = "sorse-canvas";
		sorseDiv.appendChild(sorseCanvas);

		const cacheDiv = document.createElement("div");
		cacheDiv.id = "sorse-cache";
		cacheDiv.style.display = "none";
		sorseDiv.appendChild(cacheDiv);

		parent.appendChild(sorseDiv);

		const nativeScreenSize = new Size(innerHeight, innerWidth);
		const sortedSupportedSizes = [targetScreenSize, ...supportedScreenSizes].sort(
			(a, b) => a.width * a.height - b.width * b.height
		);
		let sizeClosestToHost = sortedSupportedSizes[0];

		for (const size of sortedSupportedSizes) {
			const currentClosestPixelCount = sizeClosestToHost.width * sizeClosestToHost.height;
			const possiblePixelCount = size.width * size.width;

			if (nativeScreenSize.width >= size.width && nativeScreenSize.height >= size.height) {
				if (currentClosestPixelCount <= possiblePixelCount) {
					sizeClosestToHost = size;
				}
			}
		}

		sorseCanvas.width = sizeClosestToHost.width;
		sorseCanvas.height = sizeClosestToHost.height;
		
		init(options);
	}
}
