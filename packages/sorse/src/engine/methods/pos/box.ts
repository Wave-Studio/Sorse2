/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Position } from "../../../index";
import { Sorse } from "../../index";

export class Box {
	private _pos1: Position;
	private _pos2: Position;
	private _id: string = Sorse.id;

	set id(id: string) {
		this._id = id;
		Sorse.emit("stateChange", "SET", "id", id);
	}

	get id(): string {
		return this._id;
	}

	constructor({ pos1, pos2 }: { pos1: Position; pos2: Position }) {
		this._pos1 = pos1;
		this._pos2 = pos2;
	}

	public get pos1() {
		return this._pos1;
	}

	public get pos2() {
		return this._pos2;
	}

	public set pos1(value: Position) {
		this._pos1 = value;
		Sorse.emit("stateChange", "SET", this.id, "pos1", value);
	}

	public set pos2(value: Position) {
		this._pos2 = value;
		Sorse.emit("stateChange", "SET", this.id, "pos2", value);
	}
}
