/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseEvents } from "../../index";
import { Sorse } from "../index";

export const event = (name: keyof SorseEvents) => {
	return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
		console.error("[Sorse] Decorators are currently unsupported due to bugs! Please use Sorse.on instead")
		// Sorse.on(name, (...args: unknown[]) => {
		// 	//console.log(target);
		// 	target[propertyKey].call(target, ...args);
		// });
	};
};
