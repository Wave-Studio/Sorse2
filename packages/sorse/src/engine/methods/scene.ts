/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { Sorse } from "../index";
import { SorseCore, SorseSprite, SorseShapeCore } from "../../index";

export class SorseScene extends SorseCore {
	private static _sprites: typeof SorseSprite[] = [];
	private static _sceneBackground: SorseShapeCore[];
	private static _overlays: SorseShapeCore[] = [];

	protected static get sprites() {
		return this._sprites;
	}

	protected static get sceneBackground() {
		return this._sceneBackground;
	}

	protected static get overlays() {
		return this._overlays;
	}

	protected static set sprites(value: typeof SorseSprite[]) {
		this._sprites = value;
		Sorse.emit("stateChange", "SET", value);
	}

	protected static set sceneBackground(value: SorseShapeCore[]) {
		this._sceneBackground = value;
		Sorse.emit("stateChange", "SET", value);
	}

	protected static set overlays(value: SorseShapeCore[]) {
		this._overlays = value;
		Sorse.emit("stateChange", "SET", value);
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
			shape.render(ctx, 0, 0);
		}

		for (const sprite of [...this._sprites].reverse()) {
			sprite.render(ctx);
		}

		for (const shape of [...this._overlays].reverse()) {
			shape.render(ctx, 0, 0);
		}
	}
}
