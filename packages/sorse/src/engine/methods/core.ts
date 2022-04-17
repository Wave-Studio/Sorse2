/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "..";

export class SorseCore {
	private _states: Record<string, any> = {};
	private _visible: boolean = true;

	set visible(value: boolean) {
		this._visible = value;
	}

	get visible(): boolean {
		return this._visible;
	}

	protected getState<T>(name: string): T | undefined {
		return this._states[name];
	}

	protected setState<T>(
		name: string,
		value: T,
		replace: boolean = true
	): boolean {
		if (replace || !this._states[name]) {
			this._states[name] = value;
			Sorse.emit("stateChange", "SET", value);
			return true;
		}
		return false;
	}

	protected removeState(name: string): boolean {
		const res = delete this._states[name];
		Sorse.emit("stateChange", "DELETE", res);
		return res;
	}
}
