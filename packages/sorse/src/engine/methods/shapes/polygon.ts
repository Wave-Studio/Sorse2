/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorsePolygonOpts, SorseShapeCore } from "../../../index";

export class Polygon extends SorseShapeCore {
	private _points: { x: number; y: number }[];

	constructor({ color, position, points }: SorsePolygonOpts) {
		super();
		this._position = position;
		this._points = points;
		this._color = color;
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		// Not breaking my code this time!
		if (this._points.length < 2) return;
		ctx.fillStyle = this._color;
		ctx.strokeStyle = this._color;
		ctx.beginPath();
		ctx.moveTo(
			x + this._points[0].x + this._position.x,
			y + this._points[0].y + this._position.y
		);
		for (let i = 1; i < this._points.length; i++) {
			ctx.lineTo(
				x + this._position.x + this._points[i].x,
				y + this._points[i].y + this._position.y
			);
		}
		// Close polygon if it wasn't closed before
		ctx.lineTo(
			x + this._points[0].x + this._position.x,
			y + this._points[0].y + this._position.y
		);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
}
