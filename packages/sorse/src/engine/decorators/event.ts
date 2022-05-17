/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseEvents } from "../../index";
import { Sorse } from "../index";

export const event = (name: keyof SorseEvents) => {

	throw new Error("[Sorse] Event decorators are not supported due to bugs in Vite, Please use Sorse.on() instead");

	return (target: any, propertyKey: string) => {
		Sorse.on(name, (...args: unknown[]) => {
			target[propertyKey].call(target.constructor, ...args);
		});
	};
};
