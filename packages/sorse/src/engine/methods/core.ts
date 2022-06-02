/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../index";
import { SorseStateCore } from "./index"

export class SorseCore extends SorseStateCore {
	private _visible: boolean = true;

	set visible(value: boolean) {
		if (this._visible == value) return;
		this._visible = value;
		Sorse.emit("stateChange", "SET", "visible", value);
	}

	get visible(): boolean {
		return this._visible;
	}

	// To be overridden by extending classes
	public onInit(_sorse: Sorse) {}
}
