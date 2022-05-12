/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../index";

export class SorseCore {
	private _states: Map<string, any> = new Map();
	private _visible: boolean = true;
	private _id: string = Sorse.id;

	set id(id: string) {
		this._id = id;
		Sorse.emit("stateChange", "SET", "id", id);
	}

	get id(): string {
		return this._id;
	}

	set visible(value: boolean) {
		this._visible = value;
		Sorse.emit("stateChange", "SET", "visible", value);
	}

	get visible(): boolean {
		return this._visible;
	}

	protected getState<T>(name: string): T | undefined {
		return this._states.get(name);
	}

	protected setState<T>(
		name: string,
		value: T,
		replace: boolean = true
	): boolean {
		if (replace || !this._states.get(name)) {
			this._states.set(name, value);
			Sorse.emit("stateChange", "SET", this.id, name, value);
			return true;
		}
		return false;
	}

	protected removeState(name: string): boolean {
		const res = this._states.delete(name);
		Sorse.emit("stateChange", "DELETE", this.id, name, res);
		return res;
	}

	// To be overridden by extending classes
	public onInit(_sorse: Sorse) {}
}
