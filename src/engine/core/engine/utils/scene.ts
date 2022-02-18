/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { Sorse } from "../index";

export class Scene {
	private gameStates: Map<string, unknown> = new Map();

	protected getState<T>(key: string): T {
		return this.gameStates.get(key) as T;
	}

	protected setState(key: string, value: unknown, override = true): boolean {
		if (this.getState(key) == undefined || override == true) {
			this.gameStates.set(key, value);
			Sorse.emit('statechange', key, value);
			Sorse.emit('render');
			return true;
		} else {
			return false;
		}
	}

	protected removeState(key: string): boolean {
		return this.gameStates.delete(key);
	}
}
