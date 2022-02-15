/**
 * Sorse 2
 * 
 * Developed by Wave-studio
 */
import { SorseScript } from "../index";

export interface GameOptions {
	name: string;
	author: string;
	version: string;
	description?: string;
	canvas?: {
		width?: number;
		height?: number;
		fullscreen?: {
			aspectRatio: string;
		};
	}
	scripts: SorseScript[];
}