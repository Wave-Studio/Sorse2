/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseEvents } from "../../index";
import { Sorse } from "../index";

export const event = (name: keyof SorseEvents) => {
	return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
		Sorse.on(name, target[propertyKey]);
	};
};
