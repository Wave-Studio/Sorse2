/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "..";

export class SorseCore {
	private static _states: Record<string, any> = {};
	private static _visible: boolean = true;

	static set visible(value: boolean) {
		this._visible = value;
	}

	static get visible(): boolean {
		return this._visible;
	}

	protected static getState<T>(name: string): T | undefined {
		return this._states[name];
	}

	protected static setState<T>(
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

	protected static removeState(name: string): boolean {
		const res = delete this._states[name];
		Sorse.emit("stateChange", "DELETE", res);
		return res;
	}
}
