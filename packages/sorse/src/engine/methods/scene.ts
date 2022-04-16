/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { Sorse } from "../index";
import { SorseCore, SorseSprite, SorseShapeCore } from "../../index";

export class SorseScene extends SorseCore {
	private static _sprites: typeof SorseSprite[] = [];
	private static _sceneBackground: typeof SorseShapeCore[];

	protected static get sprites() {
		return this._sprites;
	}

	protected static set sprites(value: typeof SorseSprite[]) {
		this._sprites = value;
		Sorse.emit("stateChange", "SET", value);
	}

	protected static set sceneBackground(value: typeof SorseShapeCore[]) {
		this._sceneBackground = value;
		Sorse.emit("stateChange", "SET", value);
	}

	protected static get sceneBackground() {
		return this._sceneBackground;
	}

	constructor(visible?: boolean) {
		super();
		if (visible !== undefined) {
			SorseScene.visible = visible;
		}
	}

	public static render(ctx: CanvasRenderingContext2D) {
		if (!this.visible) return;

		for (const shape of [...this._sceneBackground].reverse()) {
			shape.render(ctx);
		}

		for (const sprite of [...this._sprites].reverse()) {
			sprite.render(ctx);
		}
	}
}
