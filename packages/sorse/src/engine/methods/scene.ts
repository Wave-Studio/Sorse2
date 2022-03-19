/**
 * Sorse 2
 * 
 * Developed by Wave-studio
 */
import { SorseCore } from "./index";

export class SorseScene extends SorseCore {
	constructor(visible?: boolean) {
		if (visible !== undefined) {
			SorseScene.visible = visible;
		}
		super();
	}

	public static renderScene(ctx: CanvasRenderingContext2D) {
		if (!this.visible) return;
	}
}