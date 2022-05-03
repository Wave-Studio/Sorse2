/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../../index";
import { SorseCore, SorseShapeCore, Position, Collision, SorseClickType } from "../../../index";

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
			if (this.collision.inCollision(this._position, new Position(x, y))) {
				this.onClick(new Position(x, y), type);
			}
		});

		Sorse.on("keyDown", (key) => {
			if (!this.visible) return;
			this.onKeyDown(key);
		})

		Sorse.on("keyUp", (key) => {
			if (!this.visible) return;
			this.onKeyUp(key);
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
		for (const shape of [...this._shapes].reverse()) {
			shape.render(ctx, this._position.x, this._position.y);
		}
	}

	/** When sprite is clicked on */
	private onClick(pos: Position, type: SorseClickType) {
	}

	/** When a key is pressed, use onKeyUp for when it's released */
	private onKeyDown(key: string) {
	}

	/** When a key is no longer held */
	private onKeyUp(key: string) {
	}
}
