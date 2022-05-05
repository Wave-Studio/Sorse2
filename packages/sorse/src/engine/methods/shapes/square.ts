/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Rect, SorseShapeCore, SorseSquareOpts } from "../../../index";

export class Square extends SorseShapeCore {
	private _sideLength: number;

	constructor({ color, sideLength, position }: SorseSquareOpts) {
		super();
		this._position = position;
		this._sideLength = sideLength;
		this._color = color;
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		new Rect({
			color: this._color,
			height: this._sideLength,
			width: this._sideLength,
			position: this._position,
		}).render(ctx, x, y);
	}
}
