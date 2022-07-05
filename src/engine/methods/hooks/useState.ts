/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { HookData } from "./lib";

export const useState = <T>(initialState: T): [T, (newState: T) => void] => {
	HookData.hookIndex++;
	// Freeze number
	const hookNumber = parseInt(`${HookData.hookIndex}`);
	HookData.hookValues[hookNumber] =
		HookData.hookValues[hookNumber] ?? initialState;
	return [
		HookData.hookValues[hookNumber] as T,
		(newState: T) => {
			HookData.hookValues[hookNumber] = newState;
		},
	];
};
