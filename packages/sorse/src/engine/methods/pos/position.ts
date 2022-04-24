/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../../index";

export class Position {
	private _id: string = Sorse.id;

	set id(id: string) {
		this._id = id;
		Sorse.emit("stateChange", "SET", "id", id);
	}

	get id(): string {
		return this._id;
	}

	constructor(private _x: number, private _y: number) {}

	public get x(): number {
		return this._x;
	}

	public get y(): number {
		return this._y;
	}

	public set x(value: number) {
		this._x = value;
		Sorse.emit("stateChange", "SET", this.id, "x", value);
	}

	public set y(value: number) {
		this._y = value;
		Sorse.emit("stateChange", "SET", this.id, "y", value);
	}
}
