/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseScene, SorsePlugin } from "../";

export interface InitOpts {
	/** Name of game */
	name: string;
	/** Creator of game */
	author: string | string[];
	/** Version of game */
	version: string | number;
	/** Description of game */
	description?: string;
	/** Canvas options */
	canvas?: {
		/** Width of canvas */
		width?: number | "screen";
		/** Height of canvas */
		height?: number | "screen";
		/** Fullscreenable? */
		fullscreen?: boolean;
	};
	/** Scenes of game */
	scenes: SorseScene[];
	plugins?: SorsePlugin[];
}
