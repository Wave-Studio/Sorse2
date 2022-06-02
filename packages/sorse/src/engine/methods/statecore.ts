/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../index";

export class SorseStateCore {
	private _states: Map<string, any> = new Map();
	private _id: string = Sorse.id;

	set id(id: string) {
		this._id = id;
		Sorse.emit("stateChange", "SET", "id", id);
	}

	get id(): string {
		return this._id;
	}

	protected getState<T>(name: string): T | undefined {
		return this._states.get(name);
	}

	protected setState<T>(
		name: string,
		value: T,
		replace: boolean = true
	): boolean {
		if (this._states.get(name) == value) return false;

		if (replace || this._states.get(name) == undefined) {
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

	protected state<T>(key: string, initialValue?: T): [T, (args: T) => void] {
		if (initialValue != undefined) {
			this.setState(key, initialValue, false);
		}

		return [
			this.getState(key) as T,
			(value: T) => {
				this.setState(key, value);
			}
		]
	}
}
