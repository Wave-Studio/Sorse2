/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseRectOpts, SorseShapeCore } from "../../../index";

export class Rect extends SorseShapeCore {
	private _width: number;
	private _height: number;

	constructor({ color, height, width, position }: SorseRectOpts) {
		super();
		this._position = position;
		this._width = width;
		this._height = height;
		this._color = color;
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		ctx.fillStyle = this._color;
		ctx.strokeStyle = this._color;
		ctx.beginPath();
		ctx.rect(
			x + this._position.x,
			y + this._position.y,
			this._width,
			this._height
		);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}
