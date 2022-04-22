/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseCircleOpts, SorseShapeCore } from "../../../index";

export class Circle extends SorseShapeCore {
	private _radius: number;

	constructor({ color, radius, position }: SorseCircleOpts) {
		super();
		this._position = position;
		this._radius = radius;
		this._color = color;
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		ctx.fillStyle = this._color;
		ctx.strokeStyle = this._color;
		ctx.beginPath();
		ctx.arc(
			x + this._position.x,
			y + this._position.y,
			this._radius,
			0,
			2 * Math.PI
		);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}
