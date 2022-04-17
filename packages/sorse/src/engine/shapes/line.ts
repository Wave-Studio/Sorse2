/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseShapeCore } from "./index";
import { SorseLineOpts, Position } from "../../index";

export class Line extends SorseShapeCore {
	private pos1: Position;
	private pos2: Position;

	constructor({ color, position, from, to}: SorseLineOpts) {
		super();
		this._position = position;
		this._color = color;
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		ctx.fillStyle = this._color;
		ctx.strokeStyle = this._color;
		ctx.beginPath();
		ctx.moveTo(x + this.pos1.x + this._position.x, y + this.pos1.y + this._position.y);
		ctx.lineTo(x + this.pos2.x + this._position.x, y + this.pos2.y + this._position.y);
		ctx.stroke();
		ctx.closePath();
	}
}
