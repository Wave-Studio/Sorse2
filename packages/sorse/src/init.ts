/**
 * Sorse 2
 * 
 * Developed by Wave-studio
 */

import { InitOpts } from "./index";
import { Sorse } from "./engine/index";

export const initSorse = (opts: InitOpts) => {
	new Sorse(opts);
}