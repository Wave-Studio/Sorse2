/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { HookData } from "./lib";

export const useFPS = () => {
	let renderedFrames = 0;
	for (const frameCount of HookData.last10FrameCounts) {
		renderedFrames+= frameCount;
	}
	return renderedFrames/HookData.last10FrameCounts.length;
};
