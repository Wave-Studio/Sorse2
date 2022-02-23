/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { Sorse } from "../index";

export class SorseClassCore {
	private isVisible: boolean = true;
	private gameStates: Map<string, unknown> = new Map();

	// Visibility
	public get visible(): boolean {
		return this.isVisible;
	}

	public set visible(value: boolean) {
		this.isVisible = value;
		Sorse.emit("render");
	}

	// States
	protected getState<T>(key: string): T {
		return this.gameStates.get(key) as T;
	}

	protected setState(key: string, value: unknown, override = true): boolean {
		if (this.getState(key) == undefined || override == true) {
			this.gameStates.set(key, value);
			Sorse.emitBulk([
				["statechange", 'SET', key, value],
				["render"],
			])
			return true;
		} else {
			return false;
		}
	}

	protected removeState(key: string): boolean {
		const res = this.gameStates.delete(key);
		Sorse.emitBulk([
			["statechange", 'DELETE', key, res],
			["render"],
		])
		return res;
	}

	public onInit?() {}
}
