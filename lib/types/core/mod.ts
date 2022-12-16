import type { Size } from "sorse/misc";

export interface SorseGameConstructorOptions {
	/** Name of the game */
	name: string;
	/** Game authors */
	creators: string[];
	/** Game description */
	description?: string;
	/** Game version */
	revision: string;
	/** Dev build (Enables extra debugging features) */
	dev: boolean;
	/** What screen size the game was originally made for */
	targetScreenSize: Size;
	/** What other optional screen sizes the game supports */
	supportedScreenSizes: Size[];
	/** Parent div's id */
	parentDiv?: string;
}