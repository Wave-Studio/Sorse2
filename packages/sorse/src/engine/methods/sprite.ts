/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../index";
import { SorseCore, SorseShapeCore } from "../../index";

export class SorseSprite extends SorseCore {
	private static _x: number = 0;
	private static _y: number = 0;
	private static _shapes: SorseShapeCore[] = [];

	constructor(visible?: boolean) {
		super();
		if (visible !== undefined) {
			SorseSprite.visible = visible;
		}
	}

	/** Sprite x position on scene */
	public static get x() {
		return this._x;
	}

	/** Sprite y position on scene */
	public static get y() {
		return this._y;
	}

	/** Sprite x position on scene */
	protected static set x(value: number) {
		SorseSprite._x = value;
		Sorse.emit("stateChange", "SET", value);
	}

	/** Sprite y position on scene */
	protected static set y(value: number) {
		SorseSprite._y = value;
		Sorse.emit("stateChange", "SET", value);
	}

	public static render(ctx: CanvasRenderingContext2D) {
		if (!this.visible) return;
		for (const shape of [...this._shapes].reverse()) {
			shape.render(ctx, this._x, this._y);
		}
	}
}
