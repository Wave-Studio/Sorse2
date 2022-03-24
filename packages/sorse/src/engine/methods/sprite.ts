/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseCore } from "./index";

export class SorseSprite extends SorseCore {
	constructor(visible?: boolean) {
		super();
		if (visible !== undefined) {
			SorseSprite.visible = visible;
		}
	}

	public static render(ctx: CanvasRenderingContext2D) {
		if (!this.visible) return;
	}
}
