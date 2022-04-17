/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../index";
import { SorseCore, SorseShapeCore, Position } from "../../index";

export class SorseSprite extends SorseCore {
	private _position: Position = new Position(0, 0);
	private _shapes: SorseShapeCore[] = [];

	constructor(visible?: boolean) {
		super();
		if (visible !== undefined) {
			this.visible = visible;
		}
	}

	/** Sprite position on scene */
	public get position() {
		return this._position;
	}

	/** Sprite shapes */
	public get shapes() {
		return this._shapes;
	}

	/** Add shape to sprite */
	public set shapes(shapes: SorseShapeCore[]) {
		this._shapes = shapes;
	}

	/** Sprite position on scene */
	protected set position(value: Position) {
		this.position = value;
		Sorse.emit("stateChange", "SET", value);
	}

	public render(ctx: CanvasRenderingContext2D) {
		if (!this.visible) return;
		for (const shape of [...this._shapes].reverse()) {
			shape.render(ctx, this._position.x, this._position.y);
		}
	}
}
