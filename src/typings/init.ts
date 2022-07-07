/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type ShapeReturn } from "../index";

export interface InitOptions {
	name?: string;
	author?: string | string[];
	version?: string | number;
	description?: string;
	component: (frameDelta: number, frameCount: number) => ShapeReturn;
	canvas: {
		nativeSize: {
			width: number;
			height: number;
		};
		/** If not provided uses nativeSize */
		scaleTo?: {
			width: number;
			height: number;
		};
	};
}
