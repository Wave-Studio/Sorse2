export * from "./structure/size.ts";

export const calculateFrameDeltaFromFps = (fps: number) => {
	return 1000 / fps;
}