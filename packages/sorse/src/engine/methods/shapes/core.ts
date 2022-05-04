/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../..";
import { Position } from "../../../index";

export class SorseShapeCore {
	protected _position: Position = new Position(-1, -1);
	protected _color: string | CanvasGradient | CanvasPattern = "";

	constructor() {
		Sorse.removeID(this._position.id);
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		// To be implemented by classes extending
	}
}
