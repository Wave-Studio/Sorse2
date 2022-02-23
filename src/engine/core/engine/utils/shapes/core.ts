/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { Sorse } from "../../index";

export class ShapeCore {
	public get x() {
		return this.xCoord;
	}

	public get y() {
		return this.yCoord;
	}

	public set x(x: number) {
		this.xCoord = x;
		Sorse.emitBulk([["statechange", "SET", "x", x], ["render"]]);
	}

	public set y(y: number) {
		this.yCoord = y;
		Sorse.emitBulk([["statechange", "SET", "x", y], ["render"]]);
	}

	constructor(private xCoord: number, private yCoord: number) {}
}
