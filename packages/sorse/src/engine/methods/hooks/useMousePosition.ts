/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Position } from "../../../index";
import { HookData } from "./lib";

export const useMousePosition = () => {
	return new Position(HookData.mouseX ?? 0, HookData.mouseY ?? 0);
};
