/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type Position, type ClickType } from "../../../index";

export class HookData {
	public static hookIndex = -1;
	public static hookValues: unknown[] = [];
	public static clicks: { pos: Position; type: ClickType }[] = [];
	public static mouseX = 0;
	public static mouseY = 0;
	public static pressedKeys: string[] = [];
	public static renderedFrame = 0;
	public static lastRender = 0;
}
