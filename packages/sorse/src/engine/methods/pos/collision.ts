/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Box, Position } from "../../../index";
import { Sorse } from "../../index";

export class Collision {
	private _id: string = Sorse.id;

	set id(id: string) {
		this._id = id;
		Sorse.emit("stateChange", "SET", "id", id);
	}

	get id(): string {
		return this._id;
	}

	constructor(private _collisionBox: Box[]) {}

	public get collisionBox() {
		return this._collisionBox;
	}

	public set collisionBox(value: Box[]) {
		this._collisionBox = value;
		Sorse.emit("stateChange", "SET", this.id, "collisionBox", value);
	}

	public inCollision(position: Position): boolean {
		for (const box of this._collisionBox) {
			if (
				position.x >= box.pos1.x &&
				position.x <= box.pos2.x &&
				position.y >= box.pos1.y &&
				position.y <= box.pos2.y
			) {
				return true;
			}
		}
		return false;
	}
}
