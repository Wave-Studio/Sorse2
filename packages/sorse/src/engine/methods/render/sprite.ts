/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../../index";
import {
	Collision,
	Position,
	SorseClickType,
	SorseCore,
	SorseShapeCore,
} from "../../../index";

export class SorseSprite extends SorseCore {
	private _position: Position = new Position(0, 0);
	private _shapes: (SorseShapeCore | SorseSprite)[] = [];
	private _collision: Collision = new Collision([]);

	constructor(visible?: boolean) {
		super();
		if (visible !== undefined) {
			this.visible = visible;
		}

		Sorse.on("rawMouseClick", (x, y, type) => {
			if (!this.visible) return;
			const pos = new Position(x, y);
			Sorse.removeID(pos.id);
			if (this.collision.inCollision(this._position, pos)) {
				const relativePos = new Position(
					x - this._position.x,
					y - this._position.y
				);
				Sorse.removeID(relativePos.id);
				this.onClick.call(this, relativePos, type);
			}
		});

		Sorse.on("keyDown", (key) => {
			if (!this.visible) return;
			this.onKeyDown.call(this, key);
		});

		Sorse.on("keyUp", (key) => {
			if (!this.visible) return;
			this.onKeyUp.call(this, key);
		});
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
		Sorse.emit("stateChange", "SET", this.id, "shapes", shapes);
	}

	/** Sprite position on scene */
	protected set position(value: Position) {
		this._position = value;
		Sorse.emit("stateChange", "SET", this.id, "position", value);
	}

	/** Sprite collision */
	protected set collision(value: Collision) {
		this._collision = value;
		Sorse.emit("stateChange", "SET", this.id, "collision", value);
	}

	public render(ctx: CanvasRenderingContext2D) {
		if (!this.visible) return;
		this.onRender.call(this);
		for (const shape of [...this._shapes].reverse()) {
			shape.render(ctx, this._position.x, this._position.y);
		}
	}

	/** When sprite is clicked on */
	protected onClick(pos: Position, type: SorseClickType) {}

	/** When a key is pressed, use onKeyUp for when it's released */
	protected onKeyDown(key: string) {}

	/** When a key is no longer held */
	protected onKeyUp(key: string) {}

	/** On next frame */
	protected onRender() {}
}
