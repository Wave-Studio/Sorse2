/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../../index";
import { SorseCore, SorseShapeCore, Position, Collision } from "../../../index";

export class SorseSprite extends SorseCore {
	private _position: Position = new Position(0, 0);
	private _shapes: (SorseShapeCore | SorseSprite)[] = [];
	private _collision: Collision = new Collision([]);

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

	/** Sprite collision */
	public get collision() {
		return this._collision;
	}

	/** Add shape to sprite */
	public set shapes(shapes: (SorseShapeCore | SorseSprite)[]) {
		this._shapes = shapes;
		Sorse.emit("stateChange", "SET", shapes);
	}

	/** Sprite position on scene */
	protected set position(value: Position) {
		this._position = value;
		Sorse.emit("stateChange", "SET", value);
	}

	/** Sprite collision */
	protected set collision(value: Collision) {
		this._collision = value;
		Sorse.emit("stateChange", "SET", value);
	}

	public render(ctx: CanvasRenderingContext2D) {
		if (!this.visible) return;
		for (const shape of [...this._shapes].reverse()) {
			shape.render(ctx, this._position.x, this._position.y);
		}
	}
}
