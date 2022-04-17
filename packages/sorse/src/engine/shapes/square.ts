/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseShapeCore } from "./index";
import { SorseSquareOpts } from "../../index";

export class Square extends SorseShapeCore {
	private _sideLength: number;

	constructor({ color, sideLength, position }: SorseSquareOpts) {
		super();
		this._position = position;
		this._sideLength = sideLength;
		this._color = color;
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		ctx.fillStyle = this._color;
		ctx.strokeStyle = this._color;
		ctx.fillRect(x + this._position.x, y + this._position.y, this._sideLength, this._sideLength);
	}
}
