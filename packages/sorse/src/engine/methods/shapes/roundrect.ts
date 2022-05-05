/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseRoundRectOpts, SorseShapeCore } from "../../../index";

export class RoundedRect extends SorseShapeCore {
	private _width: number;
	private _height: number;
	private _radius: { tl: number; tr: number; br: number; bl: number };

	constructor({ color, height, width, position, radius }: SorseRoundRectOpts) {
		super();
		this._position = position;
		this._width = width;
		this._height = height;
		this._color = color;

		this._radius =
			typeof radius == "number"
				? { tl: radius, tr: radius, br: radius, bl: radius }
				: radius;
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number): void {
		ctx.fillStyle = this._color;
		ctx.strokeStyle = this._color;
		ctx.beginPath();
		ctx.moveTo(this._position.x + x + this._radius.tl, this._position.y + y);
		ctx.arcTo(
			this._position.x + x + this._width,
			this._position.y + y,
			this._position.x + x + this._width,
			this._position.y + y + this._height,
			this._radius.tr
		);
		ctx.arcTo(
			this._position.x + x + this._width,
			this._position.y + y + this._height,
			this._position.x + x,
			this._position.y + y + this._height,
			this._radius.br
		);
		ctx.arcTo(
			this._position.x + x,
			this._position.y + y + this._height,
			this._position.x + x,
			this._position.y + y,
			this._radius.bl
		);
		ctx.arcTo(
			this._position.x + x,
			this._position.y + y,
			this._position.x + x + this._width,
			this._position.y + y,
			this._radius.tl
		);
		ctx.fill();
		ctx.stroke();
	}
}
