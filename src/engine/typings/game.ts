/**
 * Sorse 2
 * 
 * Developed by Wave-studio
 */
import { Scene } from "../index";

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
	scenes: (typeof Scene)[];
}