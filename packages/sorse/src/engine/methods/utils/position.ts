/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../../../index";

export class Position {
	public x: number;
	public y: number;

	constructor(x: number, y: number) {
		this.x = x * Sorse.scaleFactorWidth;
		this.y = y * Sorse.scaleFactorHeight;
	}
}
