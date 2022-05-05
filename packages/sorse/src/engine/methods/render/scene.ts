/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { Sorse } from "../../index";
import { SorseCore, SorseShapeCore, SorseSprite } from "../../../index";

export class SorseScene extends SorseCore {
	private _sprites: SorseSprite[] = [];
	private _sceneBackground: SorseShapeCore[] = [];
	private _overlays: SorseShapeCore[] = [];

	public get sprites() {
		return this._sprites;
	}

	protected get sceneBackground() {
		return this._sceneBackground;
	}

	protected get overlays() {
		return this._overlays;
	}

	protected set sprites(value: SorseSprite[]) {
		this._sprites = value;
		Sorse.emit("stateChange", "SET", this.id, "sprites", value);
	}

	protected set sceneBackground(value: SorseShapeCore[]) {
		this._sceneBackground = value;
		Sorse.emit("stateChange", "SET", this.id, "sceneBackground", value);
	}

	protected set overlays(value: SorseShapeCore[]) {
		this._overlays = value;
		Sorse.emit("stateChange", "SET", this.id, "overlays", value);
	}

	constructor(visible?: boolean) {
		super();
		if (visible !== undefined) {
			this.visible = visible;
		}
	}

	public render(ctx: CanvasRenderingContext2D) {
		if (!this.visible) return;

		for (const shape of [...(this._sceneBackground ?? [])].reverse()) {
			shape.render(ctx, 0, 0);
		}

		for (const sprite of [...(this._sprites ?? [])].reverse()) {
			sprite.render(ctx);
		}

		for (const shape of [...(this._overlays ?? [])].reverse()) {
			shape.render(ctx, 0, 0);
		}
	}
}
