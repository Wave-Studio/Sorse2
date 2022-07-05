/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../../../index";

// Yes, I can use String.join but it's been less reliable from my experience

const convertTemplateToString = (strings: string[], ...args: unknown[]) => {
	let fullStr = "";

	for (let i = 0; i < strings.length; i++) {
		fullStr += strings[i];
		if (i < args.length) {
			fullStr += args[i];
		}
	}

	return fullStr;
};

const convertToFloat = (strings: string[], ...args: unknown[]) => {
	let percent = convertTemplateToString(strings, ...args);
	if (percent.endsWith("%")) {
		percent = percent.slice(0, -1);
	}
	const percentFloat = parseFloat(percent);
	if (isNaN(percentFloat)) {
		throw new Error(`Invalid percent: ${percent}`);
	} else {
		return percentFloat;
	}
};

/** Percent for the width */
export const pW = (strings: string[], ...args: unknown[]) => {
	return (Sorse.renderedWidth / 100) * convertToFloat(strings, ...args);
};

/** Percent for the height */
export const pH = (strings: string[], ...args: unknown[]) => {
	return (Sorse.renderedHeight / 100) * convertToFloat(strings, ...args);
};
